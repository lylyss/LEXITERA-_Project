import React from "react";

const footerStyle = {
  background: "#222",
  color: "#fff",
  padding: "32px 0 16px 0",
  textAlign: "center",
  marginTop: "0px",
};

const linkStyle = {
  color: "#fff",
  margin: "0 12px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
};

const Footer = () => (
  <footer style={footerStyle}>
    <div>
      <a href="#privacy" style={linkStyle}>
        Privacy
      </a>
      <a href="#terms" style={linkStyle}>
        Termini
      </a>
      <a href="#contact" style={linkStyle}>
        Contatti
      </a>
    </div>
    <div style={{ marginTop: "12px", fontSize: "0.95rem", opacity: 0.7 }}>© {new Date().getFullYear()} Lexitera. Tutti i diritti riservati.</div>
  </footer>
);

export default Footer;
