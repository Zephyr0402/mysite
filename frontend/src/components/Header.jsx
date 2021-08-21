import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Shijun Shen</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#aboutme">About Me</Nav.Link>
                    <Nav.Link href="#links">Links</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;