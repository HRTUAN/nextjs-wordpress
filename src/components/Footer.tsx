import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer pt-5 pb-4 pb-lg-5 bg_dark text-light">
            <Container>
                <Row className="pb-5">
                    <Col xl={5} className="mb-4 mb-lg-5">
                        <img
                            src="https://vinhweb.com/assets/frontend/img/vinhweb-light.png"
                            width={100}
                            alt="Webhalong"
                            className="mb-3"
                        />
                        <h5>CÔNG TY TNHH WEB HALONG</h5>
                        <p className="fs-sm">
                            Web Halong là công ty thiết kế web chuyên nghiệp uy tín có trụ sở chính tại Tp Hạ long.
                            Chúng tôi thiết kế web chuẩn SEO, chuẩn di động, áp dụng công nghệ tiên tiến như HTML5, CSS3...
                        </p>
                        <p className="fs-sm mb-0">Mang đến trải nghiệm Website hiện đại</p>
                    </Col>

                    <Col md={6} xl={3} className="mb-4 mb-md-0">
                        <h6>Quy Định</h6>
                        <ul className="list-style: disc fs-sm">
                            {[
                                { text: "Chính sách & quy định chung", url: "/chinh-sach-quy-dinh-chung/" },
                                { text: "Chính sách bảo mật", url: "/chinh-sach-bao-mat-webhalong/" },
                                { text: "Chính sách bảo hành", url: "/chinh-sach-bao-hanh-webhalong/" },
                                { text: "Hình thức thanh toán", url: "/hinh-thuc-thanh-toan/" },
                                { text: "Chính sách giao nhận - cài đặt", url: "/chinh-sach-giao-nhan-cai-dat/" },
                                { text: "Quy trình làm việc", url: "/quy-trinh-lam-viec/" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url} className="text-light text-decoration-none d-block py-1">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col md={6} xl={2} className="mb-4 mb-md-0">
                        <h6>Link nhanh</h6>
                        <ul className="list-style: disc fs-sm">
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

                    <Col xl={2}>
                        <h6>Liên Hệ</h6>
                        <ul className="list-unstyled fs-sm">
                            <li>
                                <a href="tel:0373846326" className="text-light text-decoration-none d-block py-1">
                                    <i className="bi bi-telephone-fill me-2"></i> 037 384 6326
                                </a>
                            </li>
                            <li>
                                <a href="mailto:tuantq.utc@gmail.com" className="text-light text-decoration-none d-block py-1">
                                    <i className="bi bi-envelope-fill me-2"></i> tuantq.utc@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:tuantq.utc@gmail.com" className="text-light text-decoration-none d-block py-1">
                                    <i className="bi bi-geo-alt-fill me-2"></i> MM Mega Market, Hà Tu, TP Hạ Long
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex pt-3">
                            <a href="" target="_blank" className="me-3">
                                <i className="bi bi-facebook fs-3 text-light"></i>
                            </a>
                            <a href="" target="_blank" className="me-3">
                                <i className="bi bi-telegram fs-3 text-light"></i>
                            </a>
                            <a href="" target="_blank">
                                <i className="bi bi-youtube fs-3 text-light"></i>
                            </a>
                        </div>
                    </Col>

                </Row>
                <div className="text-center pt-4 border-top border-light fs-xs">
                    <p className="mb-0">Copyright © 2022. Toàn bộ bản quyền thuộc Webhalong</p>
                </div>
            </Container>
        </footer>
    );
}
