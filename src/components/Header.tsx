"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/header.css";

interface MenuProps {
    darkMode?: boolean;
    setDarkMode?: (value: boolean) => void; // Hàm để cập nhật darkMode
}

export default function Menu({ darkMode = false, setDarkMode }: MenuProps) {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = useCallback(() => {
        const shouldBeSticky = window.scrollY > 500;
        setIsSticky(shouldBeSticky);

        // Chỉ thay đổi darkMode nếu đang ở trang chủ
        if (setDarkMode) {
            const isHomePage = window.location.pathname === "/";
            if (isHomePage) {
                if (shouldBeSticky && darkMode) {
                    setDarkMode(false); // Tắt darkMode khi cuộn xuống
                } else if (window.scrollY <= 200 && !darkMode) {
                    setDarkMode(true); // Bật lại darkMode khi ở đầu trang
                }
            }
        }
    }, [darkMode, setDarkMode]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const bgClass = darkMode ? "bg_dark" : "bg_white";
    const textClass = darkMode ? "text-white" : "text-dark";
    const logoSrc = darkMode ? "/images/logoWeb-dark.png" : "/images/logoWeb.png";

    return (
        <Navbar
            variant="dark"
            expand="lg"
            className={`header ${bgClass} ${isSticky ? "fixed" : ""}`}
        >
            <Container>
                <Navbar.Brand>
                    <Link href="/" className={`${textClass} text-decoration-none`}>
                        <Image src={logoSrc} alt="My Blog" width={100} height={60} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`custom-toggle ${darkMode ? "toggle-dark" : "toggle-light"}`}
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="div">
                            <Link href="/" className={`${textClass} text-decoration-none p-2 px-2 fw-medium`}>
                                Trang chủ
                            </Link>
                        </Nav.Link>

                        <Tippy
                            content={
                                <div className="sub-menu">
                                    <Link href="/thiet-ke-website" className="dropdown-item text-decoration-none">
                                        Thiết kế Web
                                    </Link>
                                    <Link href="/phat-trien-app" className="dropdown-item text-decoration-none">
                                        Phát triển App
                                    </Link>
                                </div>
                            }
                            interactive
                            placement="bottom-start"
                            arrow={false}
                            delay={[0, 500]}
                        >
                            <Nav.Link as="div">
                                <Link href="#" className={`${textClass} text-decoration-none p-2 px-2 fw-medium`}>
                                    Dịch vụ
                                </Link>
                            </Nav.Link>
                        </Tippy>

                        <Nav.Link as="div">
                            <Link href="/blog" className={`${textClass} text-decoration-none p-2 px-2 fw-medium`}>
                                Blog
                            </Link>
                        </Nav.Link>

                        <Nav.Link as="div">
                            <Link href="/lien-he" className={`${textClass} text-decoration-none p-2 px-2 fw-medium`}>
                                Liên hệ
                            </Link>
                        </Nav.Link>
                    </Nav>

                    <div className="d-flex gap-2">
                        <Link href="/page/bang-gia-thiet-ke-website">
                            <Button className="btn btn-secondary btn-sm fs-sm rounded">
                                <i className="bi bi-tag-fill me-1"></i> Bảng giá
                            </Button>
                        </Link>
                        <Link href="/lien-he">
                            <Button className="btn btn-primary btn-sm fs-sm ms-2">
                                <i className="bi bi-telephone-fill me-1"></i> Liên hệ
                            </Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
