const WORDPRESS_GRAPHQL_ENDPOINT = "https://blog.webhalong.id.vn/graphql";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: { node: { mediaItemUrl: string } } | null;
  categories: { nodes: { name: string }[] };
  seo?: {
    title: string;
    metaDesc: string;
    opengraphImage: {
      mediaItemUrl: string;
    } | null;
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
          seo {
            title
            metaDesc
            opengraphImage {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;

  const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  return json.data.posts.nodes;
}
