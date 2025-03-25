export default function AboutSection() {
    return (
        <section className="container my-5 py-3" id="about">
            <div className="row align-items-center">
                <div className="col text-center">
                    <p className="fs-xl mb-2 fw-bold">WEB HALONG</p>
                    <h2 className="h2 mb-lg-4 mb-3 fw-bold">
                        ĐƠN VỊ THIẾT KẾ WEBSITE <span className="text-primary">CHUYÊN NGHIỆP</span>
                    </h2>

                    <div className="row align-items-center d-none d-md-flex my-5">
                        <div className="col">
                            <img
                                src="/images/hoa tuoi.png"
                                alt="Hoa tươi"
                                className="rounded-3 w-100"
                                style={{ aspectRatio: "1.3", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col">
                            <img
                                src="/images/thiet ke website.jpg"
                                alt="Thiết kế website"
                                className="rounded-3 w-100"
                                style={{ aspectRatio: "0.9", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col">
                            <img
                                src="/images/landing-page-la-gi.png"
                                alt="Landing page"
                                className="rounded-3 w-100"
                                style={{ aspectRatio: "1.3", objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    <div className="mx-auto fs-lg text-dark" style={{ maxWidth: "750px" }}>
                        <p>
                            Bạn có vô vàn <strong>ý tưởng</strong>, bạn muốn thương hiệu được lan toả, bạn muốn có thật nhiều đơn hàng, hay <strong>chuyển đổi số</strong>?
                        </p>
                        <p>
                            Webhalong với <strong>niềm đam mê</strong> công nghệ, luôn cập nhật xu hướng về kỹ thuật và thẩm mỹ. Đội ngũ <strong>Webhalong</strong> với sự tận tuỵ, tâm huyết để biến yêu cầu khách hàng thành sản phẩm <strong>hợp lý nhất</strong>.
                        </p>
                        <p className="fw-semibold fst-italic text-success mb-0">
                            "TRIỂN KHAI Ý TƯỞNG CỦA BẠN THÀNH SẢN PHẨM NHANH CHÓNG"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
