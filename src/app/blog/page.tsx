import { fetchPaginatedPosts, Post } from "@/lib/graphql";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import BlogFilter from "@/app/blog/sections/PageTitle";
import BlogContent from "@/app/blog/sections/BlogContent";
import Pagination from "@/components/Pagination";
import { Suspense } from "react";

interface PageProps {
    searchParams?: Promise<{ page?: string }>;
}

const BlogPage = async ({ searchParams }: PageProps) => {
    const resolvedSearchParams = searchParams ? await searchParams : {};
    const currentPage = Number(resolvedSearchParams.page) || 1;
    const postsPerPage = 4;

    let afterCursor: string | null = null;
    if (currentPage > 1) {
        const previousData = await fetchPaginatedPosts((currentPage - 1) * postsPerPage);
        afterCursor = previousData.endCursor;
    }

    const { posts, hasNextPage, totalCount } = await fetchPaginatedPosts(postsPerPage, afterCursor);

    return (
        <div className="container">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
            />
            <BlogFilter />

            <Suspense fallback={<div>Đang tải bài viết...</div>}>
                <BlogContent posts={posts} />
            </Suspense>

            <Pagination currentPage={currentPage} hasNextPage={hasNextPage} totalCount={totalCount} postsPerPage={postsPerPage} />
        </div>
    );
};

export default BlogPage;
