import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand className="text-white" as={Link} to="/">
            Fashionic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-white"
                  to="/testimonials"
                >
                  Testimonials
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
                <Link
                  className="text-decoration-none text-white"
                  to="/register"
                >
                  Register
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
    </div>
  );
};

export default Header;
