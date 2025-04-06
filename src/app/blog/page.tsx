import { Suspense } from "react";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import BlogFilter from "@/app/blog/sections/PageTitle";
import PostsContainer from "@/app/blog/sections/PostsContainer";

interface PageProps {
    searchParams?: Promise<Record<string, string | string[]>>;
}

const BlogPage = async ({ searchParams }: PageProps) => {
    const resolvedParams = await searchParams;
    const pageParam = resolvedParams?.page;
    const currentPage = Array.isArray(pageParam) ? Number(pageParam[0]) : Number(pageParam) || 1;
    const postsPerPage = 9;

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



