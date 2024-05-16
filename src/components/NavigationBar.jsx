import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-primary w-100 fixed-top z-1"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#" className="navbar-brand fs-4">
          Mohammed <span className="text-dark">ABI</span>
        </Navbar.Brand>
        <Navbar.Toggle arial-aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-end">
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
