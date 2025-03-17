"use client";

import Link from "next/link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function Menu() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link href="/" passHref className="text-white text-decoration-none">My Blog</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="div"><Link href="/" passHref className="text-white text-decoration-none">Trang chủ</Link></Nav.Link>
                        <Nav.Link as="div"><Link href="/dich-vu" passHref className="text-white text-decoration-none">Dịch vụ</Link></Nav.Link>
                        <Nav.Link as="div"><Link href="/blog" passHref className="text-white text-decoration-none">Blog</Link></Nav.Link>
                        <Nav.Link as="div"><Link href="/lien-he" passHref className="text-white text-decoration-none">Liên hệ</Link></Nav.Link>
                    </Nav>
                    <div className="d-flex gap-2">
                        <Link href="/pricing" passHref><Button variant="outline-light">Bảng giá</Button></Link>
                        <Link href="/contact" passHref><Button variant="light">Liên hệ</Button></Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
