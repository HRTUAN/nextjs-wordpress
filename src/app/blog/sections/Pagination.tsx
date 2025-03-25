const Pagination = () => {
    return (
        <div className="d-flex justify-content-center pt-md-4 pt-2">
            <div>
                <nav>
                    <ul className="pagination">

                        {/* Nút Previous (trang trước) */}
                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                            <span className="page-link" aria-hidden="true">‹</span>
                        </li>

                        {/* Trang hiện tại */}
                        <li className="page-item active" aria-current="page" key="paginator-page-1">
                            <span className="page-link">1</span>
                        </li>

                        {/* Các trang tiếp theo */}
                        <li className="page-item" key="paginator-page-2">
                            <button type="button" className="page-link">2</button>
                        </li>

                        {/* Nút Next (trang sau) */}
                        <li className="page-item">
                            <button type="button" className="page-link" aria-label="Next »">›</button>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;
