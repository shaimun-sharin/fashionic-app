import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand className="text-white" as={Link} to="/">
          Fashionic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="text-white" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#testimonials">Testimonials</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-danger text-white"
                >
                  Sign Out
                </button>
              ) : (
                <Link className="text-decoration-none text-white" to="/login">
                  Log In
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-white" to="/register">
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
  );
};

export default Header;
