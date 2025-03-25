"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";
import { Manrope } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePathname } from "next/navigation";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="vi">
      <body className={manrope.className}>
        <Header darkMode={isHomePage} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
