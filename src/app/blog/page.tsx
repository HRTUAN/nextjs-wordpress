import { fetchPostBySlug, PostDetail } from "@/lib/graphql";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const post: PostDetail | null = await fetchPostBySlug(slug);

    return {
        title: post ? post.title : "Bài viết không tồn tại",
        description: post ? post.content.slice(0, 150) : "Không tìm thấy bài viết",
    };
}

export default async function BlogDetailPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post: PostDetail | null = await fetchPostBySlug(slug);

    if (!post) {
        return <div className="container mt-4"><h2>Bài viết không tồn tại!</h2></div>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-primary">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}
