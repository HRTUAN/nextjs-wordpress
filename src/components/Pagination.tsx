"use client";
import { useRouter } from "next/navigation";
import "@/styles/pagination.css";

interface PaginationProps {
    currentPage: number;
    hasNextPage: boolean;
    totalCount: number;
    postsPerPage: number;
}

const Pagination = ({ currentPage, hasNextPage, totalCount, postsPerPage }: PaginationProps) => {
    const router = useRouter();

    const totalPages = Math.ceil(totalCount / postsPerPage);

    const goToPage = (page: number) => {
        router.push(`/blog?page=${page}`);
    };

    // Tính toán các trang hiển thị (chỉ hiển thị trang hiện tại + 1 trang trước + 1 trang sau)
    const getVisiblePages = () => {
        const pages = [];
        if (currentPage > 1) pages.push(currentPage - 1);
        pages.push(currentPage);
        if (currentPage < totalPages) pages.push(currentPage + 1);
        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <div className="d-flex justify-content-center pt-md-4 pt-2">
            <nav>
                <ul className="pagination">

                    {/* Nút Previous */}
                    <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage <= 1}
                        >
                            ‹
                        </button>
                    </li>

                    {/* Hiển thị các trang (tối đa 2 trang) */}
                    {visiblePages.map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                            <button className="page-link fw-bold" onClick={() => goToPage(page)}>
                                {page}
                            </button>
                        </li>
                    ))}

                    {/* Nút Next */}
                    <li className={`page-item ${!hasNextPage ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage >= totalPages}
                        >
                            ›
                        </button>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
