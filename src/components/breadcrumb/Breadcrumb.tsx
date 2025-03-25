import Link from "next/link";
import "boxicons/css/boxicons.min.css";
import "./breadcrumb.css";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="my-4">
            <nav className="pt-2" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 fs-sm fw-bold">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li
                                key={index}
                                className={`breadcrumb-item ${isLast ? "active" : ""}`}
                                aria-current={isLast ? "page" : undefined}
                            >
                                {!isLast ? (
                                    <Link href={item.href || "#"}>
                                        {index === 0 ? (
                                            <>
                                                <i className="bx bx-home-alt fs-lg me-1"></i>
                                                {item.label}
                                            </>
                                        ) : (
                                            item.label
                                        )}
                                    </Link>
                                ) : (
                                    item.label
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}
