import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavHeader = () => {
    return (
      <Navbar expand="lg" className="rustic-navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#story">Our Story</Nav.Link>
              <Nav.Link href="#nuptials">Nuptials</Nav.Link>
              <Nav.Link href="#wedding-event">Wedding Event</Nav.Link>
              <Nav.Link href="#wedding-info">Wedding Information</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#rsvp">RSVP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavHeader;