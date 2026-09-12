const WORDPRESS_GRAPHQL_ENDPOINT =
  "https://blog.webhalong.id.vn/graphql";

const REVALIDATE = false;

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: {
    node: {
      mediaItemUrl: string;
    };
  } | null;
  categories: {
    nodes: {
      name: string;
    }[];
  };
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const query = `
    {
      posts(first: 8) {
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
      }
    }
  `;

  const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: REVALIDATE,
    },
  });

  const json = await response.json();

  console.log("GraphQL response:", json);

  if (!response.ok) {
    throw new Error(
      `WordPress GraphQL HTTP error: ${response.status}`
    );
  }

  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error(
      json.errors.map((error) => error.message).join("\n")
    );
  }

  return json.data?.posts?.nodes ?? [];
}
