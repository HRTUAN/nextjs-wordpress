"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/header.css";

export default function Menu() {
    const [isSticky, setIsSticky] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            variant="dark"
            expand="lg"
            className={`header bg_dark ${isSticky ? "fixed" : ""}`}
        >
            <Container>
                <Navbar.Brand>
                    <Link href="/" passHref className="text-white text-decoration-none">My Blog</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="div"><Link href="/" passHref className="text-white text-decoration-none p-2 px-2 fw-medium">Trang chủ</Link></Nav.Link>
                        <NavDropdown
                            title="Dịch vụ"
                            show={showDropdown}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <NavDropdown.Item as="div">
                                <Link href="/dich-vu/web" passHref className="text-dark text-decoration-none">Thiết kế Web</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item as="div">
                                <Link href="/dich-vu/app" passHref className="text-dark text-decoration-none">Phát triển App</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as="div"><Link href="/blog" passHref className="text-white text-decoration-none p-2 px-2 fw-medium">Blog</Link></Nav.Link>
                        <Nav.Link as="div"><Link href="/lien-he" passHref className="text-white text-decoration-none p-2 px-2 fw-medium">Liên hệ</Link></Nav.Link>
                    </Nav>
                    <div className="d-flex gap-2">
                        <Link href="/pricing" passHref>
                            <Button className="btn btn-secondary btn-sm fs-sm rounded">
                                <i className="bi bi-tag-fill me-1"></i> Bảng giá
                            </Button>
                        </Link>
                        <Link href="/contact" passHref>
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
