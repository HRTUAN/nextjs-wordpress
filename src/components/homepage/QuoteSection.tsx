"use client";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./styles/quoteSection.module.scss";

const QuoteSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
    };

    return (
        <section className="container mt-5" id="quote">
            <div className="bg-secondary rounded-3 py-4 px-3 px-sm-4">
                <div className="row align-items-center py-lg-4">
                    <div className="col-xl-4 col-lg-5 col-md-6 offset-lg-1 mb-4 pb-3 mb-md-0 pb-md-0 ">
                        <h2 className="h1 fw-bold mb-lg-4">Yêu cầu Báo giá</h2>
                        <p className="pb-2 pb-md-4 pb-lg-5">Liên hệ ngay với Webhalong để nhận tư vấn miễn phí và giải pháp công nghệ.</p>
                        <h3 className="fw-bold mb-lg-4">Thông tin</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="tel:0373846326" className="d-flex align-items-center mb-2">
                                    <i className="bi bi-telephone me-2 text-primary fw-bold"></i> 0373846326
                                </a>
                            </li>
                            <li>
                                <a href="mailto:vinhnguyenhubt@gmail.com" className="d-flex align-items-center mb-2">
                                    <i className="bi bi-envelope me-2 text-primary"></i> tuantq.utc@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-flex align-items-center mb-2">
                                    <i className="bi bi-geo-alt me-2 text-primary"></i> MM Mega Market, Hà Tu, TP Hạ Long
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-md-6 offset-xl-1">
                        <div className="card border-0 shadow-sm p-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Tên</label>
                                    <input type="text" name="name" placeholder="Họ tên" className={styles.formControl} value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" placeholder="Email" className={styles.formControl} value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Số điện thoại</label>
                                        <input type="tel" name="phone" placeholder="Số điện thoại" className={styles.formControl} value={formData.phone} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Ngân sách</label>
                                    <select name="budget" className={styles.formSelect} value={formData.budget} onChange={handleChange} required>
                                        <option value="">Chọn ngân sách</option>
                                        <option value="5-10 triệu">5-10 triệu</option>
                                        <option value="10-20 triệu">10-20 triệu</option>
                                        <option value="20-50 triệu">20-50 triệu</option>
                                        <option value="trên 50 triệu">trên 50 triệu</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mô tả</label>
                                    <textarea name="message" placeholder="Mô tả một chút về dự án của bạn" className={styles.formControl} rows={3} value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Gửi yêu cầu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
