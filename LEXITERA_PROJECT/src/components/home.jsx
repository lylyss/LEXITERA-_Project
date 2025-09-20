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

      <MainHome />
      <Footer />
    </Container>
  );
};

export default Home;
