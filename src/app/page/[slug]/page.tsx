import { fetchPages, Page } from "@/lib/graphql";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

interface PageDetailProps {
    params: { slug: string };
}

const PageDetail = async ({ params }: PageDetailProps) => {
    const pages: Page[] = await fetchPages();
    const currentPage = pages.find((p) => p.slug === params.slug);

    if (!currentPage) {
        return <div>Page not found</div>;
    }

    const currentIndex = pages.findIndex((p) => p.slug === params.slug);
    const previousPage = pages[currentIndex + 1] || null;
    const nextPage = pages[currentIndex - 1] || null;

    return (
        <div className="container">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: currentPage.title, href: `/page/${currentPage.slug}` },
                ]}
            />

            <h1 className="fw-bold">{currentPage.title}</h1>
            <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between">
                <div className="d-flex align-items-center flex-wrap text-muted">
                    <div className="fs-sm border-end pe-3 me-3 mb-2">{new Date(currentPage.date).toLocaleString()}</div>
                    <div className="d-flex mb-2">
                        <div className="d-none align-items-center me-3">
                            <i className="bx bx-like fs-base me-1"></i>
                            <span className="fs-sm">0</span>
                        </div>
                        <div className="d-flex align-items-center me-3">
                            <i className="bx bx-comment fs-base me-1"></i>
                            <span className="fs-sm">0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />

            <hr className="my-4" />

            <div className="row my-3">
                {previousPage && (
                    <div className="col-lg-6">
                        <div className="mt-3">Bài Trước &lt;&lt;</div>
                        <Link className="text-primary" href={`/page/${previousPage.slug}`}>{previousPage.title}</Link>
                    </div>
                )}

                {nextPage && (
                    <div className="col-lg-6 text-lg-end">
                        <div className="mt-3">&gt;&gt; Bài Kế Tiếp</div>
                        <Link className="text-primary" href={`/page/${nextPage.slug}`}>{nextPage.title}</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageDetail;