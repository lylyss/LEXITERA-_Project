import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomNavbar from "./navbar";
import Footer from "./footer"; // aggiungi import footer
import bgNews from "../assets/media/IMG/svana.png";
import version1Img from "../assets/media/IMG/lostlands.png";
import version2Img from "../assets/media/IMG/portcity1.png";
import version3Img from "../assets/media/IMG/treecity.png";

const sections = [
  {
    title: "Aggiornamenti",
    items: [
      {
        title: "Aggiornamento: Modalità PvP",
        img: version3Img,
        desc: "Sfida altri giocatori nell'arena PvP, guadagna ricompense e scala la classifica dei migliori eroi di Lexitera.",
        date: "28/06/2024",
        version: "v1.2",
      },
    ],
  },
  {
    title: "Espansioni",
    items: [
      {
        title: "Nuova Espansione: Le Terre Oscure",
        img: version2Img,
        desc: "Scopri la nuova espansione con dungeon misteriosi, boss epici e nuove classi di personaggi. Solo per i più coraggiosi!",
        date: "15/06/2024",
        version: "v1.1",
      },
    ],
  },
  {
    title: "Versioni di Gioco",
    items: [
      {
        title: "Lancio Ufficiale - Lexitera",
        img: version1Img,
        desc: "La versione 1.0 di Lexitera è finalmente disponibile! Esplora terre magiche, incontra personaggi leggendari e inizia la tua avventura.",
        date: "01/06/2024",
        version: "v1.0",
      },
    ],
  },
];

const News = () => {
  return (
    <div
      className="news-page"
      style={{
        paddingTop: "50px",
        position: "relative",
        minHeight: "100vh",
        backgroundImage: ` url(${bgNews})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        fontFamily: "'Metamorphous', serif",
      }}
    >
      <CustomNavbar />
      {/* Medieval parchment overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <radialGradient id="parchmentGlow" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#cc9900ff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#c2b280" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="50%" cy="30%" rx="45%" ry="18%" fill="url(#parchmentGlow)" />
        </svg>
      </div>
      <Container style={{ position: "relative", zIndex: 1 }}>
        <h1
          className="mb-4"
          style={{
            color: "#ffffffff",
            textShadow: "0 0 8px #a67c52, 0 0 16px #f7bc03",
            fontFamily: "'Metamorphous', serif",
            letterSpacing: "2px",
            fontWeight: 700,
            fontSize: "2.5rem",
            borderBottom: "4px solid #f7bc03",

            paddingBottom: "0.5rem",
            marginBottom: "2rem",
            background: "blur(1px)",
            WebkitBackgroundClip: "initial",
            WebkitTextFillColor: "initial",
            textAlign: "center",
          }}
        >
          Notizie dal mondo di Lexitera
        </h1>
        {sections.map((section, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "2.5rem",
              padding: "0.5rem 0",
            }}
          >
            <h2
              style={{
                marginInline: "4rem",
                color: "#663505ff",
                fontFamily: "'Metamorphous', serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: "1.2rem",
                textShadow: "0 0 8px #f7bc03",
                borderLeft: "6px solid #f7bc03",
                paddingLeft: "16px",
                background: "rgba(255, 248, 220, 0.46)",
                borderRadius: "8px",

                padding: "0.2rem 5rem",
              }}
            >
              {section.title}
            </h2>
            <Row>
              {section.items.map((news, nidx) => (
                <Col key={nidx} xs={12} sm={12} md={6} lg={4} className="mb-4 d-flex" style={{ padding: "12px 60px " }}>
                  <Card
                    style={{
                      background: "rgba(194, 178, 128, 0.92)",
                      color: "#5a3e1b",
                      borderRadius: "18px",
                      boxShadow: "0 0 18px #a67c52, 0 2px 12px #0005",
                      width: "100%",
                      minHeight: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "2px solid #a67c52",
                      borderImage: "url('https://www.transparenttextures.com/patterns/wood.png') 30 round",
                      backdropFilter: "blur(1px)",
                      fontFamily: "'Metamorphous', serif",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={news.img}
                      alt={news.title}
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        borderTopLeftRadius: "18px",
                        borderTopRightRadius: "18px",
                        width: "100%",
                        boxShadow: "0 0 12px #f7bc03",
                        borderBottom: "3px solid #a67c52",
                      }}
                      className="news-card-img"
                    />
                    <Card.Body
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "1.2rem",
                      }}
                    >
                      <Card.Title
                        style={{
                          color: "#202020ff",
                          textShadow: "0 0 8px #f7bc03, 0 0 16px #a67c52",
                          fontFamily: "'Metamorphous', serif",
                          fontWeight: 600,
                          fontSize: "1.3rem",
                          marginBottom: "0.7rem",
                        }}
                      >
                        {news.title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "1.05rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {news.desc}
                      </Card.Text>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          opacity: 0.9,
                          color: "#5a3e1b",
                        }}
                      >
                        <span>
                          Versione: <span style={{ color: "#000000ff" }}>{news.version}</span>
                        </span>
                        <br />
                        <span>
                          Data: <span style={{ color: "#000000ff" }}>{news.date}</span>
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
      <Footer />
      <style>
        {`
          @media (max-width: 768px) {
            .news-page {
            
            }
            .news-card-img {
              height: 140px !important;
            }
            h1 {
              font-size: 1.7rem !important;
            }
          }
          @media (max-width: 480px) {
            .news-page {
           
            }
            .news-card-img {
              height: 90px !important;
            }
            .news-page h1 {
              font-size: 1.2rem !important;
              padding-bottom: 0.2rem !important;
            }
            .card-title {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default News;
