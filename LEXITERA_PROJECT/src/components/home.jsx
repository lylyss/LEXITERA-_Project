import React from "react";
import ModernNavbar from "./navbar";
import Footer from "./footer";
import { Container } from "react-bootstrap";

const Home = () => (
  <Container fluid style={{ padding: 0, margin: 0, textAlign: "center" }}>
    <ModernNavbar />
    <main style={{ minHeight: "70vh", padding: "40px 0", textAlign: "center" }}>
      {/* Main content */}
      <h1>Benvenuto su Lexitera</h1>
      <p>Questa è la homepage del progetto. Esplora le funzionalità moderne offerte dalla nostra piattaforma!</p>
    </main>
    <Footer />
  </Container>
);

export default Home;
