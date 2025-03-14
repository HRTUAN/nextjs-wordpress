import { fetchPosts, Post } from "@/lib/graphql";
import Link from "next/link";

const BlogPage = async () => {
    const posts: Post[] = await fetchPosts();

    return (
        <div>
            <h2 className="text-primary">Danh sách bài viết</h2>
            <ul className="list-group">
                {posts.map((post: Post) => (
                    <li key={post.id} className="list-group-item">
                        <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                            {post.title}
                        </Link>
                        <p className="text-muted" dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPage;

