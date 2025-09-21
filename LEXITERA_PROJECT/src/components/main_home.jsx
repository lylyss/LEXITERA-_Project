import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
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

  return (
    <div className="main-home-sections">
      {/* Sezione 1: Scarica gioco */}
      <section
        className="main-section download-section metamorphous-regular"
        style={{
          margin: "2rem 0",
          textAlign: "center",
          background: "url(src/assets/media/IMG/globofull.png) center/cover no-repeat",
          boxShadow: "0 2px 12px #0005",
          position: "relative",
          height: "550px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "100%", zIndex: 2, pointerEvents: "none" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "rgba(43, 43, 42, 0)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(18px)",
              borderRadius: "24px 0 0 24px",
            }}
          />
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "100%", zIndex: 2, pointerEvents: "none" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "rgba(43, 43, 42, 0)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(18px)",
              borderRadius: "0 24px 24px 0",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "350px",
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "600px",
            background: "rgba(43,43,42,0.25)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "24px",
            boxShadow: "0 2px 12px #0005",
            padding: "2rem 0",
          }}
        >
          <h2 style={{ fontSize: "2.5rem" }}>Scarica e Gioca</h2>
          <div
            style={{
              position: "relative",
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="download-btn"
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                background: "linear-gradient(90deg, #FFD700 0%, #bfa100 100%)",
                color: "#181817ff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "18px",
                boxShadow: "0 4px 16px #bfa10088",
                padding: "0.6em 2.2em",
                letterSpacing: "2px",
                transition: "background 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                outline: "none",
              }}
              onMouseEnter={() => setDownloadBtnHover(true)}
              onMouseLeave={() => setDownloadBtnHover(false)}
            >
              Download
            </button>
          </div>
          <div
            className="dropdown mt-2"
            style={{
              display: "inline-block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <button
              className="requirements-btn"
              style={{
                fontSize: "1.2rem",
                background: "linear-gradient(90deg, #3d361270 0%, #bfa100 100%)",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 2px 8px #bfa10055",
                padding: "0.5em 1.5em",
                letterSpacing: "1px",
                transition: "background 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                outline: "none",
              }}
              type="button"
              onClick={() => setShowReq((prev) => !prev)}
              aria-expanded={showReq}
            >
              Requisiti di sistema
            </button>
            <ul
              className="dropdown-menu"
              style={{
                minWidth: "250px",
                textAlign: "left",
                display: showReq ? "block" : "none",
                position: "absolute",
                left: "50%",
                transform: "translateX(-100%)",
                marginTop: "4px",
                zIndex: 100,
              }}
            >
              <li>
                <span className="dropdown-item-text">
                  <b>OS:</b> Windows 10/11, MacOS 12+
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <b>CPU:</b> Intel i5/Ryzen 5 o superiore
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <b>RAM:</b> 8GB minimo
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <b>GPU:</b> GTX 1050/RX 560 o superiore
                </span>
              </li>
              <li>
                <span className="dropdown-item-text">
                  <b>Spazio:</b> 20GB libero
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Immagine globo sotto i tasti*/}
        <img
          src="/src/assets/media/IMG/GlobFullTrasparent.png"
          alt="Globo"
          style={{
            marginTop: "32px",
            width: "350px",
            opacity: downloadBtnHover ? 1 : 0,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: 2,
            position: "relative",
            transform: downloadBtnHover ? "translateY(-260px)" : "translateY(-500px)",
            transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s",
          }}
        />
        {/* Immagine che sborda sotto la sezione */}
        <img
          src="src/assets/media/IMG/handTrasp.png"
          alt="Hand"
          style={{
            position: "absolute",
            left: "60%",
            bottom: "-250px",
            transform: "translateX(-100%)",
            width: "450px",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </section>
      {/* Sezione 3: Regioni del gioco */}
      <section
        className="main-section regions-section metamorphous-regular"
        style={{ margin: "2rem 0", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <h2
          style={{
            color: "#181817ff",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            alignSelf: "flex-start",
            textAlign: "center",
            width: "100%",
            fontSize: "2rem",
            background: "rgba(43, 43, 42, 0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            padding: "0.5rem 0",
          }}
        >
          REGIONI
        </h2>
        {regions.map((region) => (
          <div
            key={region.name}
            className="region-card"
            style={{
              width: "50%",
              height: "200px",
              borderRadius: "5px",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              boxShadow: "0 2px 12px #0005",
              marginBottom: "1.5rem",
              overflow: "hidden",
              background: `url(src/assets/media/IMG/${region.img}) center/cover no-repeat`,
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredRegion(region.name)}
            onMouseLeave={() => setHoveredRegion(null)}
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

      {/* Sezione 4: Social, PEGI, Form */}
      <section className="main-section social-section metamorphous-regular" style={{ margin: "2rem 0", textAlign: "center" }}>
        <div className="pegi-logo" style={{ marginBottom: "1rem" }}>
          <img src="src/assets/media/IMG/pegi-16-provisional--jwe3-descriptors.svg" alt="PEGI 16" style={{ height: "130px" }} />
        </div>

        <>
          <div
            className="newsletter-form"
            style={{
              maxWidth: "400px",
              margin: "2rem auto 0 auto",
              background: "rgba(43,43,42,0.18)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              borderRadius: "12px",
              boxShadow: "0 2px 12px #ffffff80",
              padding: "2rem 2rem 1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form style={{ width: "100%" }}>
              <label
                htmlFor="newsletter-email"
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  display: "block",
                  fontSize: "1.2rem",
                  color: "#FFD700",
                  letterSpacing: "1px",
                }}
              >
                Iscriviti per ricevere novità
              </label>
              <input
                type="email"
                id="newsletter-email"
                className="form-control"
                placeholder="Inserisci la tua email"
                style={{
                  marginBottom: "1rem",
                  borderRadius: "12px",
                  border: "none",
                  padding: "0.8rem 1rem",
                  fontSize: "1.1rem",
                  boxShadow: "0 2px 8px #bfa10033",
                  background: "rgba(255,255,255,0.85)",
                  outline: "none",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #FFD700 0%, #bfa100 100%)",
                  color: "#181817ff",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px #bfa10055",
                  padding: "0.7em 0",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "background 0.3s, box-shadow 0.3s",
                }}
              >
                Iscriviti
              </button>
            </form>
          </div>
          <div
            className="social-icons"
            style={{ marginTop: "1.5rem", marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "18px", flexWrap: "wrap" }}
          >
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
