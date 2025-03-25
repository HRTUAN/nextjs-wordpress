export default function StatsSection() {
    const stats = [
        {
            id: 1,
            value: "200+",
            description: "KHÁCH HÀNG TRONG VÀ NGOÀI NƯỚC",
        },
        {
            id: 2,
            value: "5+",
            description: "NĂM KINH NGHIỆM THIẾT KẾ WEBSITE",
        },
        {
            id: 3,
            value: "100+",
            description: "MẪU WEBSITE CHUYÊN NGHIỆP CHUẨN SEO",
        },
    ];

    return (
        <section
            id="home-static"
            className="py-3 my-2 my-md-4 my-lg-5 position-relative"
            style={{
                background: "url('/images/office-web.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    zIndex: 1,
                }}
            ></div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div style={{ zIndex: 3 }} className="position-relative">
                    <div className="mx-auto text-center mb-4 mb-lg-5" style={{ maxWidth: "600px" }}>
                        <h2 className="h2 pt-1 pt-xl-2 my-4 text-uppercase text-white fw-bold ">Một vài con số</h2>
                    </div>
                    <div className="row gx-lg-5">
                        {stats.map((stat) => (
                            <div key={stat.id} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="number-block text-center">
                                    <h4 className="outnb">{stat.value}</h4>
                                    <div className="description text-white">
                                        <p>{stat.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
