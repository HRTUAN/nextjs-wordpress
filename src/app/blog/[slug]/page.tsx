import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { fetchPostBySlug, PostDetail } from "@/lib/graphql";
import style from "@/styles/htmlContent.module.scss";


type Params = Promise<{ slug: string }>;

const BlogDetailPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const post: PostDetail | null = await fetchPostBySlug(slug);

    if (!post) {
        return <div className="container mt-4"><h2>Bài viết không tồn tại!</h2></div>;
    }

    return (

        <div className="container mt-4">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: post.title },
                ]}
            />
            <h1 className="text-primary mb-5">{post.title}</h1>
            <div className={style.htmlContent} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

export default BlogDetailPage;
