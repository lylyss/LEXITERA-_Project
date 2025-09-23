import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import "../css/main_home.css";

// Placeholder immagini e icone
const socialIcons = [
  { href: "#", label: "X", icon: "fa-brands fa-x-twitter" },
  { href: "#", label: "YouTube", icon: "fa-brands fa-youtube" },
  { href: "#", label: "Facebook", icon: "fa-brands fa-facebook" },
  { href: "#", label: "Instagram", icon: "fa-brands fa-instagram" },
  { href: "#", label: "Discord", icon: "fa-brands fa-discord" },
  { href: "#", label: "Telegram", icon: "fa-brands fa-telegram" },
];

const regions = [
  { name: "LUXERTIA", img: "santurary.png" },
  { name: "GEMIDERA", img: "treecity.png" },
  { name: "EXOTROS", img: "darkcity2.png" },
];

const regionVideos = {
  LUXERTIA: "src/assets/media/VIDEO/SantMBG.mp4",
  GEMIDERA: "src/assets/media/VIDEO/CityMBG.mp4",
  EXOTROS: "src/assets/media/VIDEO/DarkCityMBG.mp4",
};

const MainHome = () => {
  const [showReq, setShowReq] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [downloadHover, setDownloadHover] = useState(false);
  const [downloadBtnHover, setDownloadBtnHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main-home-sections">
      {/* Sezione 1: Scarica gioco */}
      <section
        className="main-section download-section metamorphous-regular"
        onMouseEnter={() => setDownloadHover(true)}
        onMouseLeave={() => setDownloadHover(false)}
      >
        {/* Video overlay on hover */}
        {downloadHover && (
          <video
            src="src/assets/media/VIDEO/GlobMBG.mp4"
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        )}
        <div className="download-section-blur-left" />
        <div className="download-section-blur-right" />
        <div className="download-section-centerbox">
          <h2>Scarica e Gioca</h2>
          <div className="download-btn-container">
            <button className="download-btn" onMouseEnter={() => setDownloadBtnHover(true)} onMouseLeave={() => setDownloadBtnHover(false)}>
              Download
            </button>
          </div>
          <div className="dropdown mt-2">
            <button className="requirements-btn" type="button" onClick={() => setShowReq((prev) => !prev)} aria-expanded={showReq}>
              Requisiti di sistema
            </button>
            <ul
              className="dropdown-menu"
              style={{
                left: showReq ? "50%" : "0",
                transform: showReq ? "translate(-50%, -50%) scale(1)" : "translate(0, -50%) scale(0.8)",
                opacity: showReq ? 1 : 0,
                pointerEvents: showReq ? "auto" : "none",
              }}
            >
              <li>
                <span className="dropdown-item-text">
                  <i className="fa-solid fa-desktop" style={{ marginRight: "10px", color: "#094f88ff" }}></i>
                  <b>OS:</b> Windows 10/11, MacOS 12+
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <i className="fa-solid fa-microchip" style={{ marginRight: "10px", color: "#094f88ff" }}></i>
                  <b>CPU:</b> Intel i5 / Ryzen 5 o superiore
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <i className="fa-solid fa-memory" style={{ marginRight: "10px", color: "#094f88ff" }}></i>
                  <b>RAM:</b> 8GB minimo
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <i className="fa-solid fa-video" style={{ marginRight: "10px", color: "#094f88ff" }}></i>
                  <b>GPU:</b> GTX 1050 / RX 560 o superiore
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <i className="fa-solid fa-hard-drive" style={{ marginRight: "10px", color: "#094f88ff" }}></i>
                  <b>Spazio:</b> 20GB libero
                </span>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="/src/assets/media/IMG/GlobFullTrasparent.png"
          alt="Globo"
          className="download-globe"
          style={{
            opacity: downloadBtnHover ? 1 : 0,
            transform: downloadBtnHover ? "translateY(-260px)" : "translateY(-500px)",
          }}
        />
        <img src="src/assets/media/IMG/handTrasp.png" alt="Hand" className="download-hand" />
      </section>
      {/* Sezione 2: Regioni del gioco */}
      <section className="main-section regions-section metamorphous-regular">
        <h2>Regioni di Lexitera</h2>
        {regions.map((region) => (
          <div
            key={region.name}
            className="region-card"
            onMouseEnter={() => setHoveredRegion(region.name)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => navigate(`/region/${region.name.toLowerCase()}`)}
            style={{
              background: `url(src/assets/media/IMG/${region.img}) center/cover no-repeat`,
            }}
          >
            {/* Video overlay on hover */}
            {hoveredRegion === region.name && (
              <video
                src={regionVideos[region.name]}
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />
            )}
            <span
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                color: "#FFD700",
                fontWeight: "bold",
                fontSize: "1.4rem",
                padding: "0.5rem 1.5rem",
                borderRadius: "0 12px 12px 0",
                marginBottom: "0.5rem",
                alignSelf: "center",
                textAlign: "left",
                maxWidth: "300px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {region.name}
            </span>
          </div>
        ))}
      </section>
      {/* Sezione 3: Social, PEGI, Form */}
      <section className="main-section social-section metamorphous-regular">
        <div className="pegi-logo" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <img src="src/assets/media/IMG/pegi-16-provisional--jwe3-descriptors.svg" alt="PEGI 16" style={{ maxWidth: "100%", height: "150px" }} />
        </div>
        <>
          <div className="newsletter-form">
            <form style={{ width: "100%" }}>
              <label htmlFor="newsletter-email" className="newsletter-label">
                Iscriviti per ricevere novità
              </label>
              <input type="email" id="newsletter-email" className="form-control newsletter-input" placeholder="Inserisci la tua @ email" required />
              <button type="submit" className="newsletter-submit">
                Iscriviti
              </button>
            </form>
          </div>
          <div className="social-icons">
            {socialIcons.map((icon) => (
              <a key={icon.label} href={icon.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "3rem", color: "#111111ff" }}>
                <i className={icon.icon}></i>
              </a>
            ))}
          </div>
        </>
      </section>
    </div>
  );
};

export default MainHome;
