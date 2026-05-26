const WORDPRESS_GRAPHQL_ENDPOINT = "https://blog.webhalong.id.vn/graphql";

// ============================================================
// TYPES
// ============================================================

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: { node: { mediaItemUrl: string } } | null;
  categories?: { nodes: { name: string }[] };
}

export interface PostDetail {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  slug: string;
}

export interface Page {
  id: string;
  title: string;
  content: string;
  slug: string;
  date: string;
}

export interface PaginatedPosts {
  posts: Post[];
  endCursor: string | null;
  hasNextPage: boolean;
  totalCount: number;
}

// ============================================================
// CACHE ENGINE
// ============================================================

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

const DEFAULT_TTL_MS = 5 * 60 * 1000; // 5 phút

function getCached<T>(key: string): T | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}

function setCached<T>(key: string, data: T, ttlMs = DEFAULT_TTL_MS): void {
  cache.set(key, { data, expiresAt: Date.now() + ttlMs });
}

/** Xóa toàn bộ cache (dùng khi có webhook revalidation) */
export function clearAllCache(): void {
  cache.clear();
}

/** Xóa cache theo prefix key */
export function clearCacheByPrefix(prefix: string): void {
  for (const key of cache.keys()) {
    if (key.startsWith(prefix)) cache.delete(key);
  }
}

// ============================================================
// GRAPHQL HELPER
// ============================================================

async function gqlFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    // Next.js ISR: revalidate mỗi 300 giây (nếu dùng Next.js 13+)
    // next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }

  const json = await response.json();

  if (json.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }

  return json.data as T;
}

// ============================================================
// QUERIES
// ============================================================

const GET_POSTS_QUERY = `
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const GET_POST_COUNT_QUERY = `
  query GetPostCount {
    posts(first: 1000) {
      pageInfo {
        total
      }
    }
  }
`;

const GET_POST_BY_SLUG_QUERY = `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      excerpt
      slug
    }
  }
`;

const GET_PAGES_QUERY = `
  {
    pages(first: 100) {
      nodes {
        id
        title
        content
        slug
        date
      }
    }
  }
`;

// ============================================================
// PUBLIC API (với cache)
// ============================================================

/**
 * Lấy bài viết có phân trang (mặc định 4 bài/trang)
 * Cache key riêng cho từng tổ hợp (first, after)
 */
export async function fetchPaginatedPosts(
  first: number = 4,
  after: string | null = null
): Promise<PaginatedPosts> {
  const cacheKey = `paginated_posts:${first}:${after ?? "start"}`;
  const cached = getCached<PaginatedPosts>(cacheKey);
  if (cached) return cached;

  try {
    const [postsData, countData] = await Promise.all([
      gqlFetch<{ posts: { nodes: Post[]; pageInfo: { hasNextPage: boolean; endCursor: string } } }>(
        GET_POSTS_QUERY,
        { first, after }
      ),
      gqlFetch<{ posts: { pageInfo: { total: number } } }>(GET_POST_COUNT_QUERY),
    ]);

    const result: PaginatedPosts = {
      posts: postsData.posts.nodes,
      endCursor: postsData.posts.pageInfo.endCursor ?? null,
      hasNextPage: postsData.posts.pageInfo.hasNextPage,
      totalCount: countData.posts.pageInfo.total ?? 0,
    };

    setCached(cacheKey, result);
    return result;
  } catch (error) {
    console.error("Lỗi khi fetch bài viết phân trang:", error);
    throw error;
  }
}

/**
 * Lấy thông tin bài viết theo slug
 * Cache riêng cho từng slug
 */
export async function fetchPostBySlug(slug: string): Promise<PostDetail | null> {
  const cacheKey = `post_slug:${slug}`;
  const cached = getCached<PostDetail | null>(cacheKey);
  if (cached !== null) return cached;

  try {
    const data = await gqlFetch<{ postBy: PostDetail | null }>(
      GET_POST_BY_SLUG_QUERY,
      { slug }
    );

    const post = data?.postBy ?? null;
    setCached(cacheKey, post);
    return post;
  } catch (error) {
    console.error(`Lỗi khi fetch bài viết có slug "${slug}":`, error);
    return null;
  }
}

/**
 * Lấy tất cả các trang (page)
 * Cache chung cho toàn bộ danh sách pages
 */
export async function fetchPages(): Promise<Page[]> {
  const cacheKey = "all_pages";
  const cached = getCached<Page[]>(cacheKey);
  if (cached) return cached;

  try {
    const data = await gqlFetch<{ pages: { nodes: Page[] } }>(GET_PAGES_QUERY);
    const pages = data?.pages?.nodes ?? [];
    setCached(cacheKey, pages);
    return pages;
  } catch (error) {
    console.error("Lỗi khi fetch trang:", error);
    return [];
  }
}
