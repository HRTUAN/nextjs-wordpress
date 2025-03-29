import { Suspense } from "react";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import BlogFilter from "@/app/blog/sections/PageTitle";
import PostsContainer from "@/app/blog/sections/PostsContainer";

interface PageProps {
    searchParams?: { page?: string };
}

const BlogPage = ({ searchParams }: PageProps) => {
    const currentPage = Number(searchParams?.page) || 1;
    const postsPerPage = 4;

    return (
        <div className="container">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
            />
            <BlogFilter />
            {/* Suspense chỉ hoạt động khi nó bọc một component chứa Promise chưa resolved (thường là một async component 
            hoặc component có sử dụng await fetch data), không phải khi Promise đã được resolved trước khi render. */}
            <Suspense fallback={<div className="py-5 text-center">Đang tải bài viết...</div>}>
                <PostsContainer currentPage={currentPage} postsPerPage={postsPerPage} />
            </Suspense>
        </div>
    );
};

export default BlogPage;