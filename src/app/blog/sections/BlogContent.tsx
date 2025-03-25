import Link from "next/link";
import { Post } from "@/lib/graphql";

interface BlogContentProps {
    posts: Post[];
}

const BlogContent = ({ posts }: BlogContentProps) => {
    return (
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
            {posts.map((post) => (
                <div key={post.id} className="h-auto py-3">
                    <article className="card border-0 bg-transparent">
                        <div className="position-relative overflow-hidden rounded-3">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="position-absolute top-0 start-0 w-100 h-100"
                                aria-label={post.title}
                            />
                            {post.featuredImage?.node.mediaItemUrl ? (
                                <img
                                    src={post.featuredImage.node.mediaItemUrl}
                                    className="card-img-top"
                                    alt={post.title}
                                    style={{ aspectRatio: "1.55", objectFit: "cover" }}
                                />
                            ) : (
                                <div className="card-img-top bg-secondary" style={{ aspectRatio: "1.55" }}></div>
                            )}
                        </div>
                        <div className="card-body pb-1 px-0">
                            <span className="badge fs-sm text-white bg-info shadow-info text-decoration-none mb-3">
                                Tin tức
                            </span>
                            <h3 className="h4 fw-bold" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt }} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} />
                            <div className="d-flex align-items-center text-muted">
                                <div className="fs-sm border-end pe-3 me-3">Ngày cập nhật</div>
                                <div className="d-flex align-items-center me-3">
                                    <i className="bx bx-comment fs-lg me-1"></i>
                                    <span className="fs-sm">0</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
        </div>
    );
};

export default BlogContent;
