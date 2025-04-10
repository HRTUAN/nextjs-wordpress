import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog WebHaLong - Chia sẻ kiến thức thiết kế website, SEO và IT",
    description:
        "Cập nhật kiến thức về thiết kế website, SEO, công nghệ và kinh nghiệm phát triển web tại WebHaLong. Nâng cao hiệu quả kinh doanh cùng IT Hạ Long.",
    keywords: [
        "blog thiết kế website",
        "SEO website Hạ Long",
        "công nghệ web",
        "kinh nghiệm thiết kế web",
        "hướng dẫn SEO",
        "blog WebHaLong",
    ],
    openGraph: {
        title: "Blog WebHaLong - Chia sẻ kiến thức thiết kế website, SEO và IT",
        description:
            "Tổng hợp bài viết hữu ích về phát triển website, kỹ thuật SEO và các mẹo IT tại Hạ Long. Viết bởi đội ngũ WebHaLong.",
        url: "https://webhalong.id.vn/blog",
        siteName: "WebHaLong",
        type: "website",
        images: [
            {
                url: "https://blog.webhalong.id.vn/wp-content/uploads/2025/04/blog-webhalong.jpg",
                width: 1200,
                height: 630,
                alt: "Blog WebHaLong - Thiết kế web và SEO",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog WebHaLong - Chia sẻ kiến thức thiết kế website, SEO và IT",
        description:
            "Khám phá bài viết chất lượng từ WebHaLong về thiết kế web, công nghệ và marketing số.",
        images: [
            "https://blog.webhalong.id.vn/wp-content/uploads/2025/04/blog-webhalong.jpg",
        ],
    },
};
