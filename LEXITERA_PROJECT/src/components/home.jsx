import React from "react";
import CustomNavbar from "./navbar";
import Footer from "./footer";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid
      className="home-responsive-container"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('src/assets/media/IMG/oldPaper.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: 0,
        position: "relative",
      }}
    >
      {/* Spazio per spostare la navbar più in basso */}
      <div style={{ height: "35px" }}></div>
      <CustomNavbar expand="lg" fixed="top" />

      <main
        className="home-main-content"
        style={{
          minHeight: "100rem",
          padding: "0 0",
          textAlign: "center",
          paddingTop: "70px",
        }}
      >
        {/* Main content */}
        <h1>Benvenuto su Lexitera</h1>
        <p>Questa è la homepage del progetto. Esplora le funzionalità moderne offerte dalla nostra piattaforma!</p>
      </main>
      <Footer />
    </Container>
  );
};

export default Home;
