import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="vi">
    <body>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;

