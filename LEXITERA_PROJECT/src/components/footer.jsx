import React from "react";
import logo from "../assets/media/IMG/lexitera_LOGO.png";

const footerStyle = {
  background: "#111111ff",
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
    <img
      src={logo}
      alt="Lexitera Logo"
      style={{
        height: "120px",
        marginRight: "8px",
        verticalAlign: "middle",
        filter: "drop-shadow(0 2px 8px #0008)",
      }}
    />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", flexWrap: "wrap", marginTop: "12px" }}>
      <a href="#privacy" style={linkStyle}>
        Privacy Policy
      </a>
      <a href="#terms" style={linkStyle}>
        Termini di servizio
      </a>
      <a href="#about" style={linkStyle}>
        Chi siamo
      </a>
      <a href="#contact" style={linkStyle}>
        Contatti
      </a>
      <a href="#help" style={linkStyle}>
        Centro assistenza
      </a>
    </div>
    <div style={{ marginTop: "12px", fontSize: "0.95rem", opacity: 0.7 }}>© {new Date().getFullYear()} Lexitera. Tutti i diritti riservati.</div>
  </footer>
);

export default Footer;
