const WORDPRESS_GRAPHQL_ENDPOINT = "https://webhalong.id.vn/graphql";

export interface BlogPost {
    id: string;
    title: string;
    featuredImage: { node: { mediaItemUrl: string } } | null;
    categories: { nodes: { name: string }[] };
    excerpt: string;
    slug: string;
}


export async function fetchBlogPosts(): Promise<BlogPost[]> {
    const query = `
    {
      posts(first: 6) {
        nodes {
          id
          title
          excerpt
          slug
          featuredImage {
            node{
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
    });

    const json = await response.json();
    return json.data.posts.nodes;
}
