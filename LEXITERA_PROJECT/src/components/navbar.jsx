import React from "react";
import { Navbar, Nav, Container, Dropdown, Form, Button } from "react-bootstrap";
import logo from "../assets/media/IMG/lexitera_LOGO.png";
import "../css/navbar.css";
const CustomNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar-sticky">
      <Container fluid style={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
        <Navbar.Brand href="#home" style={{ padding: 0, marginRight: "24px", marginLeft: "24px" }}>
          <img src={logo} alt="Lexitera Logo" style={{ height: "160px", width: "auto", verticalAlign: "middle" }} />
        </Navbar.Brand>
        <Nav style={{ display: "flex", alignItems: "center", gap: "18px", flex: 1 }}>
          <Nav.Link href="#home">Home page</Nav.Link>
          <Nav.Link href="#news">Notizie</Nav.Link>
          <Nav.Link href="#personaggi">Personaggi</Nav.Link>
          <Nav.Link href="#esplora">Esplora</Nav.Link>
          <Nav.Link href="#ricarica">Ricarica</Nav.Link>
          <Nav.Link href="#riscatta-codice">Riscatta codice</Nav.Link>
        </Nav>
        <div style={{ marginLeft: "auto" }}>
          <Dropdown align="end">
            <Dropdown.Toggle variant="primary" id="dropdown-login" style={{ marginLeft: "12px" }}>
              Accedi
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 300, padding: 20 }}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Inserisci email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ width: "100%" }}>
                  Accedi
                </Button>
                <div style={{ marginTop: "16px", textAlign: "center" }}>
                  <a
                    href="#"
                    style={{
                      padding: 0,
                      textDecoration: "underline",
                      background: "none",
                      border: "none",
                      color: "#0d6efd",
                    }}
                  >
                    Registrati
                  </a>
                  {" | "}
                  <a
                    href="#"
                    style={{
                      padding: 0,
                      textDecoration: "underline",
                      background: "none",
                      border: "none",
                      color: "#0d6efd",
                    }}
                  >
                    Password dimenticata?
                  </a>
                </div>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
