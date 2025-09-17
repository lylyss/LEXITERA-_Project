import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import LoginModal from "./login";

const ModernNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Lexitera</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home page</Nav.Link>
              <Nav.Link href="#news">Notizie</Nav.Link>
              <Nav.Link href="#personaggi">Personaggi</Nav.Link>
              <Nav.Link href="#esplora">Esplora</Nav.Link>
              <Nav.Link href="#ricarica">Ricarica</Nav.Link>
              <Nav.Link href="#riscatta-codice">Riscatta codice</Nav.Link>
              <Button variant="outline-light" onClick={handleShow} style={{ marginLeft: "12px" }}>
                Accedi
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={show} handleClose={handleClose} />
    </>
  );
};

export default ModernNavbar;
