import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'

function Appbar() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">True Post</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Featured</Nav.Link>
      <Nav.Link href="#pricing">Latest</Nav.Link>
    </Nav>
    <Nav className="justify-content-end">
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#register">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
</>
  );
}

export default Appbar;
