import React from "react";
import CustomNavbar from "./navbar";
import Footer from "./footer";
import MainHome from "./main_home";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid
      className="home-responsive-container"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('src/assets/media/IMG/sky-clouds-abstract.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: 0,
        position: "relative",
      }}
    >
      {/* Div decorativi ai lati*/}
      <div
        style={{
          position: "fixed",
          top: -35,
          right: 0,
          width: "400px",
          height: "100vh",
          background: "url('src/assets/media/animal/feral.trasp.PNG') left center/contain no-repeat",

          zIndex: 10,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "fixed",
          top: -35,
          left: 0,
          width: "400px",
          height: "100vh",
          background: "url('src/assets/media/animal/gigant_saur.trasp.PNG') right center/contain no-repeat",
          zIndex: 10,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Spazio per spostare la navbar più in basso */}
      <div style={{ height: "35px" }}></div>
      <CustomNavbar expand="lg" fixed="top" style={{ zIndex: 4 }} />

      <MainHome />
      <Footer />
    </Container>
  );
};

export default Home;
