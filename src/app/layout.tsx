import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '@/component/Menu';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="vi">
    <body>
      <Menu />
      <main className="container my-4">{children}</main>
      <footer className="bg-light text-center py-3 mt-5">
        © 2025 My Blog - All rights reserved
      </footer>
    </body>
  </html>
);

export default RootLayout;

