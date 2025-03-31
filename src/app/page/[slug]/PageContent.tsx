import Link from "next/link";
// import "./page-content.css";
import style from "@/styles/htmlContent.module.scss";



interface PageContentProps {
    title: string;
    date: string;
    content: string;
    previousPage?: { slug: string; title: string } | null;
    nextPage?: { slug: string; title: string } | null;
}

const PageContent = ({ title, date, content, previousPage, nextPage }: PageContentProps) => {
    return (
        <div>
            <h1 className="fw-bold">{title}</h1>
            <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between">
                <div className="d-flex align-items-center flex-wrap text-muted">
                    <div className="fs-sm border-end pe-3 me-3 mb-2">
                        {new Date(date).toLocaleString()}
                    </div>
                    <div className="d-flex mb-2">
                        <div className="d-flex align-items-center me-3">
                            <i className="bx bx-comment fs-base me-1"></i>
                            <span className="fs-sm">0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.htmlContent} dangerouslySetInnerHTML={{ __html: content }} />


            <hr className="my-4" />

            <div className="row my-3">
                {previousPage && (
                    <div className="col-lg-6">
                        <div className="mt-3">Bài Trước &lt;&lt;</div>
                        <Link className="text-primary" href={`/page/${previousPage.slug}`}>
                            {previousPage.title}
                        </Link>
                    </div>
                )}

                {nextPage && (
                    <div className="col-lg-6 text-lg-end">
                        <div className="mt-3">&gt;&gt; Bài Kế Tiếp</div>
                        <Link className="text-primary" href={`/page/${nextPage.slug}`}>
                            {nextPage.title}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageContent;
