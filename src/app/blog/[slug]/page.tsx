import { fetchPostBySlug, PostDetail } from "@/lib/graphql";
import { notFound } from "next/navigation";

interface Props {
    params: { slug: string };
}

const BlogDetailPage = async ({ params }: Props) => {
    const post: PostDetail | null = await fetchPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <div>
            <h2 className="text-primary">{post.title}</h2>
            <div className="text-muted" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
};

export default BlogDetailPage;

