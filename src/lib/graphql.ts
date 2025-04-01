const WORDPRESS_GRAPHQL_ENDPOINT = "https://blog.webhalong.id.vn/graphql";

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
}

// ✅ Hàm lấy bài viết có phân trang (mặc định 4 bài/trang)
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

  // Gọi API lấy bài viết
  const postsResponse = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { first, after } }),
  });
  const postsJson = await postsResponse.json();
  const { nodes, pageInfo } = postsJson.data.posts;

  // Gọi API lấy tổng số bài viết
  const countResponse = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: countQuery }),
  });
  const countJson = await countResponse.json();
  const totalCount = countJson.data.posts.nodes.length;

  return {
    posts: nodes,
    endCursor: pageInfo.endCursor,
    hasNextPage: pageInfo.hasNextPage,
    totalCount,
  };
}


// ✅ Hàm lấy thông tin bài viết theo slug
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
    });

    const json = await response.json();
    return json?.data?.postBy || null;
  } catch (error) {
    console.error(`Lỗi khi fetch bài viết có slug ${slug}:`, error);
    return null;
  }
}

// ✅ Hàm lấy tất cả các trang (page)
export async function fetchPages(): Promise<Page[]> {
  const query = `
    {
      pages {
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
    });

    const json = await response.json();
    return json?.data?.pages?.nodes || [];
  } catch (error) {
    console.error("Lỗi khi fetch trang:", error);
    return [];
  }
}
