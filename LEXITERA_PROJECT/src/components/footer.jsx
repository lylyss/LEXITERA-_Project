import React from "react";
import logo from "../assets/media/IMG/lexitera_LOGO.png";

const footerStyle = {
  background: "#111111ff",
  color: "#fff",
  padding: "32px 0 35px 0",
  textAlign: "center",
  marginTop: "0px",
  fontFamily: "Roboto, Arial, sans-serif",
  fontWeight: "400",
  boxShadow: "0 -2px 8px #0008",
};

const linkStyle = {
  color: "#fff",
  margin: "0 12px",
  textDecoration: "none",
  fontSize: "0.9rem",
};

const Footer = () => (
  <footer style={footerStyle}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "0",
        flexWrap: "wrap",
        width: "100%",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          flex: "0 0 50%",
          maxWidth: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          minWidth: "120px",
        }}
      >
        <img
          src={logo}
          alt="Lexitera Logo"
          style={{
            height: "160px",

            verticalAlign: "middle",
            filter: "drop-shadow(0 2px 8px #0008)",
          }}
        />
      </div>
      <div
        style={{
          flex: "0 0 50%",
          maxWidth: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "left",
          gap: "12px",
          minWidth: "220px",
        }}
      >
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
    </div>
    <div style={{ marginTop: "15px", fontSize: "0.95rem", opacity: 0.7 }}>© {new Date().getFullYear()} Lexitera. Tutti i diritti riservati.</div>
  </footer>
);

export default Footer;
