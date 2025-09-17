import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "../css/login.css";

const LoginModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} centered className="custom-login-modal" backdrop="static" dialogClassName="modal-zindex-fix" fullscreen="sm-down">
    <Modal.Header closeButton>
      <Modal.Title>Accedi</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
            Recupera password
          </a>
        </div>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Chiudi
      </Button>
    </Modal.Footer>
  </Modal>
);

export default LoginModal;
