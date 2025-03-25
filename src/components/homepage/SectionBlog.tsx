"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogPosts, BlogPost } from "@/lib/blogApi";
import Button from "@/components/Button";
import "./styles/blogSection.css";


const SectionBlog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        async function loadPosts() {
            const data = await fetchBlogPosts();
            setPosts(data);
        }
        loadPosts();
    }, []);

    return (
        <section className="container mt-5">
            <div className="mx-auto text-center my-4 mb-lg-5" style={{ maxWidth: "530px" }}>

                <h2 className="text-center mb-4 font-title text-uppercase">Blog</h2>
                <p>Tham khảo thêm các bài viết về lĩnh vực website, công nghệ, thủ thuật... để nâng cao kiến thức cho bạn</p>
            </div>

            <div className="row">
                {posts.map((post) => (
                    <div key={post.id} className="col-lg-3 col-6 mb-4">
                        <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                            <div className="card border-0">
                                {post.featuredImage && (
                                    <img
                                        src={post.featuredImage.node.mediaItemUrl}
                                        className="card-img-top rounded-3 h-100"
                                        alt={post.title}
                                        style={{ objectFit: "cover" }}
                                    />
                                )}
                                <div className="card-body p-0">
                                    {post.categories.nodes.length > 0 && (
                                        <span className="badge bg-primary fs-6 py-2 px-3 my-3">
                                            {post.categories.nodes[0].name}
                                        </span>
                                    )}
                                    <h5 className="card-title text-truncate-2 h5 mb-2 fw-bold clr_header">{post.title}</h5>
                                    <p className="card-text text-truncate-2 fs-sm">
                                        {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center p-3"> <Button href={`/blog`} text="Xem bài viết" className="mt-3" /></div>

        </section>
    );
};

export default SectionBlog;
