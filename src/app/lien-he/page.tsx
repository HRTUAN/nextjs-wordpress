"use client";

import HeroSection from "@/app/thiet-ke-website/sections/Hero";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        text: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Thông tin đã được gửi!");
    };

    return (
        <section
            className="bg-size-cover bg-position-bottom-center bg-repeat-0 pt-3 pb-5"
            style={{
                backgroundImage: 'url("/images/bg.svg")',
            }}
        >
            <div className="container pt-3 pb-lg-3 pb-xl-3">
                <Breadcrumb
                    items={[
                        { label: "Trang chủ", href: "/" },
                        { label: "Liên hệ" },
                    ]}
                />

                <div className="row pt-md-2 pt-lg-3 pb-2 pb-md-4">
                    <div className="col-xxl-4 col-xl-5 col-lg-6 pt-3 mt-3">
                        <h1 className="h3 mb-2 fw-bold">Làm việc với WebHalong?</h1>
                        <h2 className="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3 fw-bold">Liên Hệ!</h2>
                        <div className="nav d-block lead pt-lg-5">
                            <a
                                href="mailto:tuantq.utc@gmail.com"
                                className="nav-link fw-normal text-decoration-underline p-0 mb-4 fs-2 text-black"
                            >
                                tuantq.utc@gmail.com
                            </a>
                            <div className="text-nav fs-2">+84 0373846326</div>
                        </div>
                    </div>

                    <div className="col-lg-6 offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-12">
                                    <label htmlFor="name" className="form-label fs-base">
                                        Họ tên
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Họ tên"
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="name"
                                        required
                                    />
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="email" className="form-label fs-base">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="email"
                                    />
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="phone" className="form-label fs-base">
                                        Số điện thoại
                                    </label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Số điện thoại"
                                        type="tel"
                                        className="form-control form-control-lg"
                                        id="phone"
                                        required
                                    />
                                </div>

                                <div className="col-12 pb-2">
                                    <label htmlFor="text" className="form-label fs-base">
                                        Nội dung
                                    </label>
                                    <textarea
                                        name="text"
                                        value={formData.text}
                                        onChange={handleChange}
                                        placeholder="Nội dung tin nhắn..."
                                        className="form-control form-control-lg"
                                        id="text"
                                        rows={3}
                                        required
                                    ></textarea>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-lg btn-primary w-100 w-sm-auto">
                                        Gửi
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
