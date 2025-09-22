import React from "react";
import CustomNavbar from "./navbar";
import Footer from "./footer";
import MainHome from "./main_home";
import { Container } from "react-bootstrap";
import "../css/home.css";

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
      {/* Div decorativi ai lati */}
      <div className="side-decor-right" aria-hidden="true" />
      <div className="side-decor-left" aria-hidden="true" />
      {/* Spazio per spostare la navbar più in basso */}
      <div style={{ height: "35px" }}></div>
      <CustomNavbar expand="lg" fixed="top" style={{ zIndex: 4 }} />

      <MainHome />
      <Footer />
    </Container>
  );
};

export default Home;
