import React from "react";
import CustomNavbar from "./navbar";
import Footer from "./footer";
import { Container } from "react-bootstrap";
import GradualBlur from "./GradualBlur";

const Home = () => (
  <Container
    fluid
    style={{
      minHeight: "100vh",
      backgroundImage: "url('src/assets/media/IMG/oldPaper.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      padding: 0,
    }}
  >
    <CustomNavbar expand="lg" fixed="top" />
    {/* GradualBlur background */}
    <GradualBlur target="parent" position="bottom" height="6rem" strength={2} divCount={5} curve="bezier" exponential={true} opacity={1} />
    <main
      style={{
        minHeight: "100rem",
        padding: "0 0",
        textAlign: "center",
        paddingTop: "70px", // aggiunto per evitare che la navbar copra il contenuto
      }}
    >
      {/* Main content */}
      <h1>Benvenuto su Lexitera</h1>
      <p>Questa è la homepage del progetto. Esplora le funzionalità moderne offerte dalla nostra piattaforma!</p>
    </main>
    <Footer />
  </Container>
);

export default Home;
