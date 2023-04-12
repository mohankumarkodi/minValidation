import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bg">
      <Container >
        <Navbar.Brand className="heading-nav" href="/langingPage">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="routes" href="/products">
              Products
            </Nav.Link>
            <Nav.Link className="routes" href="/cart">
              cart
            </Nav.Link>
            <Nav.Link className="routes" href="/logout">
              logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
