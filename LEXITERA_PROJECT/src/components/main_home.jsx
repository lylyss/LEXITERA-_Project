import React, { useState } from "react";

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

const news = [
  { title: "Titolo Notizia 1", href: "#", img: "news1.jpg" },
  { title: "Titolo Notizia 2", href: "#", img: "news2.jpg" },
  { title: "Titolo Notizia 3", href: "#", img: "news3.jpg" },
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
          height: "500px",
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
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h2>Scarica il gioco</h2>
          <div style={{ position: "relative", width: "fit-content" }}>
            <button
              className="btn btn-success"
              style={{ fontSize: "1.2rem", marginBottom: "1rem" }}
              onMouseEnter={() => setDownloadBtnHover(true)}
              onMouseLeave={() => setDownloadBtnHover(false)}
            >
              Download
            </button>
            <img
              src="src/assets/media/IMG/GlobFullTrasparent.png"
              alt="Globo"
              style={{
                position: "absolute",
                left: "50%",
                top: downloadBtnHover ? "100%" : "0%",
                opacity: downloadBtnHover ? 1 : 0,
                transform: "translate(-50%, 0)",
                width: "220px",
                zIndex: 5,
                pointerEvents: "none",
                transition: "top 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s",
              }}
            />
          </div>
          <div className="dropdown mt-2" style={{ display: "inline-block" }}>
            <button className="btn btn-secondary dropdown-toggle" type="button" onClick={() => setShowReq((prev) => !prev)} aria-expanded={showReq}>
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
                transform: "translateX(-50%)",
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

      {/* Sezione 2: Notizie recenti */}
      <section
        className="main-section news-section metamorphous-regular"
        style={{
          margin: "2rem 0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "2rem",
          justifyContent: "center", // centra gli elementi
          maxWidth: "900px", // restringi larghezza massima
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="news-carousel" style={{ flex: "1 1 300px", minWidth: "250px" }}>
          {/* Placeholder carousel */}
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "#eee",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Carosello immagini notizie</span>
          </div>
        </div>
        <div className="news-titles" style={{ flex: "1 1 300px", minWidth: "250px" }}>
          <h3>Notizie recenti</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {news.map((n, idx) => (
              <li key={idx} style={{ marginBottom: "1rem" }}>
                <a href={n.href} style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#0d6efd", textDecoration: "underline" }}>
                  {n.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
              width: "1000px",
              height: "180px",
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
        <div className="social-icons" style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "18px", flexWrap: "wrap" }}>
          {socialIcons.map((icon) => (
            <a key={icon.label} href={icon.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "#FFD700" }}>
              <i className={icon.icon}></i>
            </a>
          ))}
        </div>
        <div className="pegi-logo" style={{ marginBottom: "1rem" }}>
          <img src="src/assets/media/IMG/pegi-16-provisional--jwe3-descriptors.svg" alt="PEGI 16" style={{ height: "130px" }} />
        </div>
        <div className="newsletter-form" style={{ maxWidth: "350px", margin: "0 auto" }}>
          <form>
            <label htmlFor="newsletter-email" style={{ fontWeight: "bold", marginBottom: "0.5rem", display: "block" }}>
              Iscriviti per ricevere novità
            </label>
            <input
              type="email"
              id="newsletter-email"
              className="form-control"
              placeholder="Inserisci la tua email"
              style={{ marginBottom: "0.5rem" }}
              required
            />
            <button type="submit" className="btn btn-success" style={{ width: "100%" }}>
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
