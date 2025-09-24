import React, { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Image, NavbarBrand } from "react-bootstrap";
import CustomNavbar from "./navbar";
import Footer from "./footer";

// Nuove immagini personaggi
import uogothImg from "../assets/media/shamano/ShamanDarkImg.trasp.PNG";
import saluinImg from "../assets/media/mago oscuro/darkSageIMG.trasp.PNG";
import luxImg from "../assets/media/maga di luce/luxBG.trasp.PNG";
import bgLuxertia from "../assets/media/IMG/santurary.png";
import bgGemidera from "../assets/media/IMG/city4.png";
import bgExotros from "../assets/media/IMG/darkcity3.png";

const characters = [
  {
    key: "uogoth",
    name: "UOGOTH",
    img: uogothImg,
    quote: ",,Il potere oscuro scorre in me''",
    desc: [
      "Uogoth, lo Sciamano Oscuro di Exotros, domina le forze delle tenebre e guida il suo popolo con saggezza e mistero.",
      "La sua presenza incute rispetto e timore in ogni angolo della regione.",
    ],
    region: "EXOTROS",
  },
  {
    key: "saluin",
    name: "SALUIN",
    img: saluinImg,
    quote: ",,La conoscenza è la vera magia.''",
    desc: [
      "Saluin, il Mago Oscuro di Gemidera, è custode di antichi segreti e incantesimi dimenticati.",
      "La sua mente acuta e la sua magia potente lo rendono un avversario temibile.",
    ],
    region: "GEMIDERA",
  },
  {
    key: "lux",
    name: "LUX",
    img: luxImg,
    quote: ",,La luce guiderà il nostro destino.''",
    desc: ["Lux, la Maga di Luce di Luxertia, porta speranza e protezione con la sua magia luminosa.", "La sua gentilezza illumina anche i tempi più oscuri."],
    region: "LUXERTIA",
  },
];

const Pg = () => {
  const [selectedChar, setSelectedChar] = useState(characters[0]);

  let bgImg = bgLuxertia;
  if (selectedChar.region === "GEMIDERA") bgImg = bgGemidera;
  else if (selectedChar.region === "EXOTROS") bgImg = bgExotros;

  return (
    <div
      style={{
        paddingTop: "50px",
        position: "relative",
        padding: "0px",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ height: "50px" }}></div> {/* spazio */}
      <CustomNavbar />
      <Container fluid style={{ padding: 0, height: "1050px", position: "relative", minHeight: "80vh", width: "100%" }}>
        <Row style={{ minHeight: "100vh" }}>
          {/* Main character area */}
          <Col xs={12} sm={9} md={10} style={{ position: "relative", padding: "0", height: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                height: "100%",
                position: "relative",
              }}
              className="pg-main-flex"
            >
              {/* Character Info */}
              <div
                style={{
                  flex: 1,
                  padding: "4rem 0 0 2rem",
                  zIndex: 1,
                  minWidth: "260px",
                }}
                className="pg-info"
              >
                <h1
                  style={{
                    textAlign: "right",
                    fontSize: "4rem",
                    color: "#fff",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    marginBottom: "1.5rem",
                    textShadow: "0 0 16px #000, 0 0 8px #ffd700",
                    borderRadius: "12px",
                    backdropFilter: "blur(1px)",
                    background: "linear-gradient(120deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.7) 100%)",
                    padding: "0.3rem 1rem",
                    pointerEvents: "none",
                  }}
                >
                  {selectedChar.name}
                </h1>
                <Card
                  style={{
                    background: "rgba(30,30,40,0.7)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    maxWidth: "520px",
                    marginBottom: "2rem",
                    boxShadow: "0 0 24px #000",
                  }}
                >
                  <Card.Body>
                    <Card.Text style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
                      {selectedChar.desc.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#fff",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    marginBottom: "2rem",
                    textShadow: "0 0 8px #000",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(30,30,40,0.7)",
                      padding: "0.5rem 1.2rem",
                      borderRadius: "8px",
                      border: "2px solid #34b5e933",
                      fontStyle: "italic",
                    }}
                  >
                    {selectedChar.quote}
                  </span>
                </div>
              </div>
              {/* Character Image */}
              <div
                style={{
                  flex: 1.2,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  position: "relative",
                  marginTop: "100px",
                }}
                className="pg-img-area"
              >
                <Image
                  src={selectedChar.img}
                  alt={selectedChar.name}
                  style={{
                    maxHeight: "650px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    zIndex: 1,
                    marginRight: "2rem",

                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(168, 146, 116, 1) 100%)",
                    padding: "0.3rem 1rem",
                    borderRadius: "0px",
                    pointerEvents: "none",
                  }}
                  fluid
                />
                <div
                  style={{
                    position: "absolute",
                    right: "2.5rem",
                    top: "2.5rem",
                    width: "100%",
                    color: "rgb(255, 255, 255)",
                    fontSize: "2.2rem",
                    fontWeight: "bold",
                    textShadow: "rgb(0, 0, 0) 0px 0px 12px, rgb(255, 215, 0) 0px 0px 8px",
                    textAlign: "right",
                    background: "linear-gradient(60deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                    padding: "0.3rem 1rem",
                    borderRadius: "12px",
                    pointerEvents: "none",
                  }}
                >
                  {selectedChar.region}
                </div>
              </div>
            </div>
            {/* Character selector bar */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "-120px",
                background: "rgba(30,30,40,0.85)",
                padding: "1.2rem 0 1.2rem 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                zIndex: 1,
                flexWrap: "wrap",
              }}
              className="pg-selector-bar"
            >
              {characters.map((char) => (
                <Button
                  key={char.key}
                  variant={selectedChar.key === char.key ? "light" : "dark"}
                  style={{
                    transition: "none !important",
                    animation: "none !important",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: selectedChar.key === char.key ? "2px solid rgb(0 222 255 / 50%)" : "none",
                    boxShadow: selectedChar.key === char.key ? "0 0 12px rgb(0 241 255)" : "none",
                    background: selectedChar.key === char.key ? "#71a8d336" : "rgba(30,30,40,0.7)",
                    color: selectedChar.key === char.key ? "rgba(232, 236, 240, 1)" : "#fff",
                    minWidth: "135px",
                    minHeight: "170px",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    padding: "0.5rem 0.5rem 0.2rem",
                  }}
                  onClick={() => setSelectedChar(char)}
                >
                  <Image
                    src={char.img}
                    alt={char.name}
                    style={{
                      width: "110px",
                      height: "155px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      marginBottom: "0.5rem",
                      border: selectedChar.key === char.key ? "2px solid #c0e9f3ff" : "2px solid #444",
                    }}
                  />
                  <span>{char.name}</span>
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
      <style>
        {`
          @media (max-width: 1200px) {
            .pg-info h1 {
              font-size: 2.5rem !important;
            }
            .pg-img-area img {
              max-height: 400px !important;
              width: 90px !important;
              height: 120px !important;
            }
            .pg-selector-bar button {
              min-width: 100px !important;
              min-height: 120px !important;
            }
          }
          @media (max-width: 900px) {
            .pg-main-flex {
              flex-direction: column !important;
              align-items: center !important;
            }
            .pg-info {
              padding: 2rem 1rem 0 1rem !important;
              min-width: 0 !important;
              width: 100% !important;
            }
            .pg-img-area {
              justify-content: center !important;
              min-height: 250px !important;
            }
            .pg-img-area img {
              margin-right: 0 !important;
              max-height: 250px !important;
              width: 70px !important;
              height: 90px !important;
            }
            .pg-selector-bar {
              gap: 1rem !important;
              padding: 0.8rem 0 !important;
            }
            .pg-selector-bar button {
              min-width: 80px !important;
              min-height: 90px !important;
              font-size: 0.95rem !important;
            }
          }
          @media (max-width: 600px) {
            .pg-info h1 {
              font-size: 1.5rem !important;
              padding: 0.2rem 0.5rem !important;
            }
            .pg-info {
              padding: 1rem 0.5rem 0 0.5rem !important;
            }
            .pg-img-area img {
              max-height: 120px !important;
              width: 48px !important;
              height: 60px !important;
            }
            .pg-selector-bar button {
              min-width: 60px !important;
              min-height: 60px !important;
              font-size: 0.8rem !important;
              padding: 0.2rem !important;
            }
          }
          @media (max-width: 480px) {
            .pg-info h1 {
              font-size: 1.1rem !important;
              padding: 0.1rem 0.2rem !important;
            }
            .pg-info {
              padding: 0.5rem 0.2rem 0 0.2rem !important;
            }
            .pg-img-area img {
              max-height: 80px !important;
              width: 32px !important;
              height: 40px !important;
            }
            .pg-selector-bar button {
              min-width: 40px !important;
              min-height: 40px !important;
              font-size: 0.7rem !important;
              padding: 0.1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Pg;
