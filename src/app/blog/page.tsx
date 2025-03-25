
import { fetchPosts, Post } from "@/lib/graphql";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import BlogFilter from "@/app/blog/sections/PageTitle";
import BlogContent from "@/app/blog/sections/BlogContent";
import Pagination from "@/app/blog/sections/Pagination";

const BlogPage = async () => {
    const posts: Post[] = await fetchPosts();

    return (
        <div className="container">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
            />
            <BlogFilter />
            <BlogContent posts={posts} />
            <Pagination />

        </div>
    );
};

export default BlogPage;

