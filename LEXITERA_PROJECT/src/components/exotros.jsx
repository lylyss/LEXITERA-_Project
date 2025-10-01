import React from "react";
import CustomNavbar from "./navbar";
import Footer from "./footer";
import exotrosImg from "../assets/media/IMG/darkcity3.png";
import uogothImg from "../assets/media/shamano/ShamanDarkImg.trasp.PNG";
import pg2Img from "../assets/media/CHARACTER CONCEPT/pg2.png";
import pg1Img from "../assets/media/CHARACTER CONCEPT/pg1.png";
import { useNavigate } from "react-router-dom";

const exotrosDesc = `Exotros è una regione avvolta da misteri e ombre, dove la magia oscura e le antiche tradizioni si intrecciano.
Le sue città sono dominate da architetture imponenti e atmosfere enigmatiche. Gli abitanti di Exotros sono noti per la loro saggezza,
la loro forza e la capacità di affrontare le sfide più oscure. Qui, il potere dello Sciamano Oscuro guida il destino della regione.

Nel cuore di Exotros si ergono antiche rovine, testimoni di epoche dimenticate e di battaglie tra forze magiche. I boschi che circondano le città sono popolati da creature misteriose e spiriti ancestrali, che proteggono i segreti della terra. Le notti sono illuminate solo dalla luce fioca delle lanterne e dal bagliore delle stelle, mentre il vento porta con sé sussurri di incantesimi e leggende.

La popolazione di Exotros vive in equilibrio tra rispetto per le tradizioni e desiderio di potere. I rituali magici scandiscono il tempo, e ogni famiglia custodisce un grimorio tramandato da generazioni. Gli Sciamani, come Uogoth, sono venerati come guide spirituali e protettori, capaci di comunicare con le forze oscure e di mantenere la pace tra i clan.

Exotros è una terra dove il coraggio e la conoscenza sono indispensabili per sopravvivere, e dove ogni giorno può celare una nuova sfida o una rivelazione inattesa.`;

const uogoth = {
  name: "UOGOTH",
  img: uogothImg,
  quote: ",,Il potere oscuro scorre in me''",
  desc: [
    "Uogoth, lo Sciamano Oscuro di Exotros, domina le forze delle tenebre e guida il suo popolo con saggezza e mistero.",
    "La sua presenza incute rispetto e timore in ogni angolo della regione.",
  ],
};

const exotrosNpcs = [
  { name: "Apprendista Magico", img: pg2Img, role: "Apprendista Magico" },
  { name: "Viaggiatore di Luxertia", img: pg1Img, role: "Viaggiatore di Luxertia" },
];

const Exotros = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#181c24",
        backgroundImage: `url(${exotrosImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div style={{ height: "50px" }}></div>

      <div
        style={{
          padding: "80px 0 40px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 style={{ color: "#ffd700", marginBottom: "2rem", fontSize: "2.5rem", textShadow: "0 0 8px #000" }}>Regione EXOTROS</h1>
        <div
          style={{
            background: "rgba(30,30,40,0.8)",
            borderRadius: "0px",
            boxShadow: "0 2px 12px #0008",
            padding: "2rem 2.5rem",

            color: "#fff",
            fontSize: "1.2rem",
            textAlign: "center",
            border: "none",
            marginBottom: "2rem",
          }}
        >
          {exotrosDesc}
        </div>
        {/* Personaggio correlato */}
        <h2 style={{ color: "#ffd700", margin: "2rem 0 1rem 0", fontSize: "2rem", textShadow: "0 0 6px #000" }}>Personaggio Regionale</h2>
        <div
          style={{
            background: "rgba(30,30,40,0.85)",
            borderRadius: "0px",
            boxShadow: "0 2px 12px #0008",
            padding: "2rem",
            maxWidth: "420px",
            color: "#fff",
            textAlign: "center",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/pg")}
          title="Vai alla pagina personaggi"
        >
          <img
            src={uogoth.img}
            alt={uogoth.name}
            className="lux-img-hover"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "0px",
              marginBottom: "1rem",
              border: "none",
              boxShadow: "0 0 12px #0008",
              transition: "transform 0.3s",
            }}
          />
          <h2 style={{ color: "#ffd700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{uogoth.name}</h2>
          <div style={{ fontStyle: "italic", marginBottom: "1rem", color: "#ffd700" }}>{uogoth.quote}</div>
          {uogoth.desc.map((line, i) => (
            <div key={i} style={{ marginBottom: "0.5rem" }}>
              {line}
            </div>
          ))}
        </div>
        {/* NPC aggiuntivi */}
        <h2 style={{ color: "#ffd700", margin: "2rem 0 1rem 0", fontSize: "1.6rem", textShadow: "0 0 6px #000" }}>NPC della Regione</h2>
        <div style={{ marginTop: "0", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {exotrosNpcs.map((npc, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(30,30,40,0.7)",
                borderRadius: "0px",
                boxShadow: "0 2px 8px #0008",
                padding: "1.2rem",
                color: "#fff",
                textAlign: "center",
                minWidth: "160px",
                maxWidth: "180px",
              }}
            >
              <img
                src={npc.img}
                alt={npc.name}
                className="lux-img-hover"
                style={{
                  width: "90px",
                  height: "180px",
                  aspectRatio: "9/18",
                  objectFit: "cover",
                  borderRadius: "0px",
                  marginBottom: "0.7rem",
                  border: "none",
                  boxShadow: "0 0 8px #0008",
                  transition: "transform 0.3s",
                }}
              />
              <div style={{ color: "#ffd700", fontWeight: "bold", fontSize: "1.1rem" }}>{npc.name}</div>
              <div style={{ fontSize: "0.95rem", color: "#c0c0c0" }}>{npc.role}</div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .lux-img-hover:hover {
            transform: scale(1.25);
            z-index: 2;
          }
          body, h1, h2, h3, h4, h5, h6, div, span, p, button {
            font-family: "Metamorphous", serif !important;
          }
        `}
      </style>
    </div>
  );
};

export default Exotros;
