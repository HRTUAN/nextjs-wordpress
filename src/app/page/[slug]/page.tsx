import { fetchPages, Page } from "@/lib/graphql";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import PageContent from "./PageContent";

interface PageDetailProps {
    params: Promise<{ slug: string }>;
}

const PageDetail = async ({ params }: PageDetailProps) => {
    const resolvedParams = await params;
    const pages: Page[] = await fetchPages();
    const currentPage = pages.find((p) => p.slug === resolvedParams.slug);

    if (!currentPage) {
        return <div>Page not found</div>;
    }

    const currentIndex = pages.findIndex((p) => p.slug === resolvedParams.slug);
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

            <PageContent
                title={currentPage.title}
                date={currentPage.date}
                content={currentPage.content}
                previousPage={previousPage}
                nextPage={nextPage}
            />
        </div>
    );
};

export default PageDetail;
