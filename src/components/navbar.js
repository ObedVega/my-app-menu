import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from '../img/logo.png';
 
export const Menu = () => {
  return (
   <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      RAGA Urban Cafe
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home"></Nav.Link>
        </Nav>
    </Container>
  </Navbar>
  </>
  );
};