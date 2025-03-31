export default function Loading() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-dark">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Đang tải...</span>
            </div>
            <p className="mt-3">Đang tải, vui lòng chờ...</p>
        </div>
    );
}
