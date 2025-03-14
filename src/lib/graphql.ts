const WORDPRESS_GRAPHQL_ENDPOINT = "http://localhost:8081/Flatsome_test/graphql";

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
}

export interface PostDetail {
    id: string;
    title: string;
    content: string;
    slug: string;
}

export async function fetchPosts(): Promise<Post[]> {
    const query = `
    {
      posts {
        nodes {
          id
          title
          excerpt
          slug
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

    const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { slug } }),
    });

    const json = await response.json();
    return json.data.postBy || null;
}
