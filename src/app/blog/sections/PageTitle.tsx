export default function BlogFilter() {
    return (
        <div className="row gy-4 align-items-end mb-2 pb-md-3">
            <div className="col-lg-5 col-md-4">
                <h1 className="mb-2 mb-md-0">Blog</h1>
            </div>

            <div className="col-lg-7 col-md-8">
                <div className="row gy-2">
                    {/* Bộ lọc danh mục */}
                    <div className="col-lg-5 col-sm-6">
                        <div className="d-flex align-items-center">
                            <select className="form-select ">
                                <option className="fs-ms" value="">Tất cả Danh mục</option>
                                <option className="fs-ms" value="tin-tuc">Tin tức</option>
                                <option className="fs-ms" value="huu-ich">Hữu ích</option>
                                <option className="fs-ms" value="huong-dan">Hướng dẫn</option>
                            </select>
                        </div>
                    </div>

                    {/* Ô tìm kiếm */}
                    <div className="col-lg-7 col-sm-6">
                        <div className="input-group position-relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className="form-control pe-5 rounded"
                            />
                            <i className="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
