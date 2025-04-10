import HeroSection from "@/components/homepage/HeroSection";
import SectionBlog from "@/components/homepage/SectionBlog";
import QuoteSection from "@/components/homepage/QuoteSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thiết kế website tại Hạ Long",
  description: "Web Hạ Long chuyên thiết kế website tại Hạ Long, hỗ trợ doanh nghiệp phát triển online với giải pháp tối ưu, chuẩn SEO và giao diện hiện đại.",
  keywords: [
    "Thiết kế website Hạ Long",
    "Thiết kế website Cẩm phả",
    "Web Hạ Long",
    "Web Cẩm phả",
    "Thiết kế web chuyên nghiệp",
    "Thiết kế website doanh nghiệp",
    "Thiết kế web chuẩn SEO",
  ],
  openGraph: {
    title: "Thiết kế website tại Hạ Long",
    description: "Dịch vụ thiết kế website tại Hạ Long chuẩn SEO, giao diện đẹp, dễ quản lý và tối ưu tốc độ.",
    url: "https://webhalong.id.vn",
    siteName: "Web Hạ Long",
    images: [
      {
        url: "https://blog.webhalong.id.vn/wp-content/uploads/2025/04/Thiet-ke-website-tai-Ha-Long-3.jpg",
        width: 1200,
        height: 630,
        alt: "Thiết kế website tại Hạ Long",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://webhalong.id.vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiết kế website tại Hạ Long",
    description: "Thiết kế web tại Hạ Long chuẩn SEO, giao diện đẹp, tối ưu Google Core Web Vitals.",
    images: ["https://blog.webhalong.id.vn/wp-content/uploads/2025/04/Thiet-ke-website-tai-Ha-Long-3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "TsBh7od7uSkCmhS7mdAw6Mh-rOT-v9WOvBdspyZixaI",
  },
};
<meta name="google-site-verification" content="TsBh7od7uSkCmhS7mdAw6Mh-rOT-v9WOvBdspyZixaI" />
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SectionBlog />
      <QuoteSection />
    </div>
  );
}
