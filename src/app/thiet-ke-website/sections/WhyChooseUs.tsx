"use client";

import "boxicons/css/boxicons.min.css";

export default function WhyChooseUs() {
    const reasons = [
        {
            id: 1,
            icon: "bx-badge-check",
            title: "WEBSITE CHUẨN SEO",
            description:
                "WebHalong tối ưu Website chuẩn SEO nhất, giúp cho Website của khách hàng có bước đệm vững chắc lên top các công cụ tìm kiếm trong tương lai.",
        },
        {
            id: 2,
            icon: "bx-desktop",
            title: "TÍCH HỢP GIAO DIỆN RESPONSIVE",
            description:
                "Giao diện tương thích trên PC, Laptop, Tablet, Mobile và tất cả các kích thước màn hình.",
        },
        {
            id: 3,
            icon: "bx-cog",
            title: "GIAO DIỆN QUẢN LÝ ĐƠN GIẢN",
            description:
                "Webiste của WebHalong tối ưu giao diện quản lý đơn giản, dễ dàng sử dụng, giúp khách hàng quản lý hiệu quả.",
        },
        {
            id: 4,
            icon: "bxs-hand",
            title: "UX - GIAO DIỆN THÂN THIỆN",
            description:
                "Xu hướng thân thiện với người dùng là yếu tố quan trọng nhất hiện nay mà WebHalong cung cấp cho khách hàng.",
        },
        {
            id: 5,
            icon: "bx-layer",
            title: "TÍCH HỢP MẠNG XÃ HỘI",
            description:
                "Tích hợp các mạng xã hội vào Website của bạn giúp khách hàng dễ dàng liên lạc và tương tác.",
        },
        {
            id: 6,
            icon: "bx-star",
            title: "HỖ TRỢ TẬN TÌNH",
            description:
                "Hỗ trợ tận tình là phương châm quan trọng nhất của WebHalong. Chúng tôi luôn phục vụ khách hàng tốt nhất để phát triển bền vững.",
        },
    ];

    return (
        <section className="py-3 my-2 my-md-4 my-lg-5">
            <div className="container">
                <div className="mx-auto text-center mb-4 mb-lg-5" style={{ maxWidth: "600px" }}>
                    <h2 className="h2 pt-1 pt-xl-2 my-4 text-uppercase fw-bold">
                        Tại sao bạn nên chọn WebHalong
                    </h2>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 pb-xl-3">
                    {reasons.map((reason) => (
                        <div key={reason.id} className="col text-center">
                            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4 text-primary">
                                <i
                                    className={`d-block bx ${reason.icon}`}
                                    style={{ width: 32, height: 32, fontSize: 32, lineHeight: 1 }}
                                ></i>
                            </div>
                            <h3 className="h5 mb-2 mb-lg-0">{reason.title}</h3>
                            <p className="text-center mt-2 mb-0">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
