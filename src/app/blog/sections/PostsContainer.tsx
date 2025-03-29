import { fetchPaginatedPosts } from "@/lib/graphql";
import BlogContent from "@/app/blog/sections/BlogContent";
import Pagination from "@/components/Pagination";

interface PostsContainerProps {
    currentPage: number;
    postsPerPage: number;
}

// Component này sẽ thực hiện fetch data và là async component
// giúp Suspense hoạt động đúng cách
const PostsContainer = async ({ currentPage, postsPerPage }: PostsContainerProps) => {
    let afterCursor: string | null = null;
    if (currentPage > 1) {
        const previousData = await fetchPaginatedPosts((currentPage - 1) * postsPerPage);
        afterCursor = previousData.endCursor;
    }

    const { posts, hasNextPage, totalCount } = await fetchPaginatedPosts(postsPerPage, afterCursor);

    return (
        <>
            <BlogContent posts={posts} />
            <Pagination
                currentPage={currentPage}
                hasNextPage={hasNextPage}
                totalCount={totalCount}
                postsPerPage={postsPerPage}
            />
        </>
    );
};

export default PostsContainer;