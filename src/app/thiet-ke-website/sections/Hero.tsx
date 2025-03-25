import Link from "next/link";
import "../styles/page-web-design.css";

export default function HeroSection() {
    return (
        <section
            className="position-relative d-flex align-items-center min-vh-100 bg-light mb-2 pt-2"
            style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
            data-jarallax=""
            data-img-position="0% 100%"
            data-speed="0.5"
        >
            <div className="container position-relative zindex-5 py-5">
                <div className="row justify-content-md-start justify-content-center">
                    <div className="col-md-6 col-sm-8 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
                        <div className="mb-md-5 pb-xl-5 mb-4">
                            <h1 className="display-2 mb-md-5 mb-3 pb-3 fw-bold text-black">
                                <span className=" text-gradient-primary">Triển khai</span> ý tưởng của bạn với thiết kế website
                            </h1>
                            <div className="d-md-flex align-items-md-start">
                                <Link href="/page/bang-gia-thiet-ke-website" className="btn btn-lg btn-primary flex-shrink-0 me-md-4 mb-md-0 mb-sm-4 mb-3">
                                    Bảng Giá
                                </Link>
                                <p className="d-lg-block d-none mb-0 ps-md-3">
                                    WebHalong sẵn sàng triển khai ý tưởng kinh doanh, xử lý yêu cầu của bạn nhanh chóng và siêu hiệu quả với website. Code tay, tùy biến đa dạng tương thích với yêu cầu chi tiết của bạn.
                                </p>
                            </div>
                        </div>

                        <div className="d-inline-flex align-items-center justify-content-center justify-content-md-start position-relative">
                            <a href="#about" className="btn btn-video btn-icon rounded-circle shadow-sm flex-shrink-0 stretched-link me-3 d-flex align-items-center justify-content-center ">
                                <i className="bx bx-chevron-down fs-5 "></i>
                            </a>
                            <span className="fs-sm">Tìm hiểu thêm</span>
                        </div>

                    </div>
                    <div className="col-sm-6 col-sm-6 col-9 order-md-2 order-1">

                    </div>
                </div>
            </div>
        </section>

    );
}