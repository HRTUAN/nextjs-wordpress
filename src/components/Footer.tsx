import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer pt-5 pb-4 pb-lg-5 bg-dark text-light">
            <Container>
                <Row className="pb-5">
                    {/* Cột 1: Giới thiệu công ty */}
                    <Col xl={5} className="mb-4 mb-lg-5">
                        <img
                            src="https://vinhweb.com/assets/frontend/img/vinhweb-light.png"
                            width={100}
                            alt="VinhWeb"
                            className="mb-3"
                        />
                        <h5>CÔNG TY TNHH VINH WEB</h5>
                        <p className="fs-sm">
                            Vinh Web là công ty thiết kế web chuyên nghiệp uy tín có trụ sở chính tại Tp Lào Cai.
                            Chúng tôi thiết kế web chuẩn SEO, chuẩn di động, áp dụng công nghệ tiên tiến như HTML5, CSS3...
                        </p>
                        <p className="fs-sm mb-0">GPKD: 5300819920, cấp ngày: 12/12/2023 bởi Sở KH&ĐT TP Lào Cai.</p>
                    </Col>

                    {/* Cột 2: Quy định */}
                    <Col md={6} xl={3} className="mb-4 mb-md-0">
                        <h6>Quy Định</h6>
                        <ul className="list-unstyled fs-sm">
                            {[
                                { text: "Chính sách & quy định chung", url: "/page/chinh-sach-quy-dinh-chung" },
                                { text: "Chính sách bảo mật", url: "/page/chinh-sach-bao-mat" },
                                { text: "Chính sách bảo hành", url: "/page/chinh-sach-bao-hanh" },
                                { text: "Hình thức thanh toán", url: "/page/hinh-thuc-thanh-toan" },
                                { text: "Chính sách giao nhận - cài đặt", url: "/page/chinh-sach-giao-nhan-cai-dat" },
                                { text: "Quy trình làm việc", url: "/page/quy-trinh-lam-viec" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} className="text-light text-decoration-none d-block py-1">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Cột 3: Link nhanh */}
                    <Col md={6} xl={2} className="mb-4 mb-md-0">
                        <h6>Link nhanh</h6>
                        <ul className="list-unstyled fs-sm">
                            {[
                                { text: "Thiết kế website", url: "/thiet-ke-website" },
                                { text: "Bảng giá làm web", url: "/page/bang-gia-thiet-ke-website" },
                                { text: "Mua source code", url: "/products" },
                                { text: "Blog", url: "/blog" },
                                { text: "Liên hệ", url: "/contact" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} className="text-light text-decoration-none d-block py-1">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Cột 4: Liên hệ */}
                    <Col xl={2}>
                        <h6>Liên Hệ</h6>
                        <ul className="list-unstyled fs-sm">
                            <li>
                                <a href="tel:0979788685" className="text-light text-decoration-none d-block py-1">
                                    📞 0979 788 685
                                </a>
                            </li>
                            <li>
                                <a href="mailto:vinhnguyenhubt@gmail.com" className="text-light text-decoration-none d-block py-1">
                                    ✉️ vinhnguyenhubt@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="text-light d-block py-1">📍 134 Nguyễn Tri Phương, Tp Lào Cai</span>
                            </li>
                        </ul>
                        <div className="d-flex pt-3">
                            <a href="https://www.facebook.com/vinhstinghubt" target="_blank" className="me-3">
                                <i className="bx bxl-facebook fs-3 text-light"></i>
                            </a>
                            <a href="https://telegram.me/vinhnguyenhubt" target="_blank" className="me-3">
                                <i className="bx bxl-telegram fs-3 text-light"></i>
                            </a>
                            <a href="https://www.youtube.com/@vinhwebit" target="_blank">
                                <i className="bx bxl-youtube fs-3 text-light"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className="text-center pt-4 border-top border-light fs-xs">
                    <p className="mb-0">Copyright © 2023. Toàn bộ bản quyền thuộc Vinh Web</p>
                </div>
            </Container>
        </footer>
    );
}
