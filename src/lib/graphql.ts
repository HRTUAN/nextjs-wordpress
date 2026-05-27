const WORDPRESS_GRAPHQL_ENDPOINT = "https://blog.webhalong.id.vn/graphql";

const REVALIDATE: false | number = false; // false = vĩnh viễn, số = giây

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

export async function fetchPaginatedPosts(first: number = 4, after: string | null = null) {
  const query = `
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

  const countQuery = `
    query GetPostCount {
      posts {
        nodes {
          id
        }
      }
    }
  `;

  const [postsResponse, countResponse] = await Promise.all([
    fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { first, after } }),
      next: { revalidate: REVALIDATE },
    }),
    fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: countQuery }),
      next: { revalidate: REVALIDATE },
    }),
  ]);

  const postsJson = await postsResponse.json();
  const { nodes, pageInfo } = postsJson.data.posts;

  const countJson = await countResponse.json();
  const totalCount = countJson.data.posts.nodes.length;

  return {
    posts: nodes,
    endCursor: pageInfo.endCursor,
    hasNextPage: pageInfo.hasNextPage,
    totalCount,
  };
}

export async function fetchPostBySlug(slug: string): Promise<PostDetail | null> {
  const query = `
    query GetPostBySlug($slug: String!) {
      postBy(slug: $slug) {
        id
        title
        content
        slug
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { slug } }),
      next: { revalidate: REVALIDATE },
    });

    const json = await response.json();
    return json?.data?.postBy || null;
  } catch (error) {
    console.error(`Lỗi khi fetch bài viết có slug ${slug}:`, error);
    return null;
  }
}

export async function fetchPages(): Promise<Page[]> {
  const query = `
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

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: REVALIDATE },
    });

    const json = await response.json();
    return json?.data?.pages?.nodes || [];
  } catch (error) {
    console.error("Lỗi khi fetch trang:", error);
    return [];
  }
}
