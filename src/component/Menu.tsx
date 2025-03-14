"use client";

import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Menu() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} href="/">My Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} href="/">Trang chủ</Nav.Link>
                        <Nav.Link as={Link} href="/blog">Bài viết</Nav.Link>
                        <Nav.Link as={Link} href="/about">Giới thiệu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
