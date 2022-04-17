import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img width="50" height="30" src={logo} alt="" />
            Fashionic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="text-decoration-none text-white" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-white" to="/gallery">
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-white"
                  to="/services"
                >
                  Services
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link className="text-decoration-none text-white" to="/login">
                  Log In
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-white" to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-white" to="/blogs">
                  Blogs
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
