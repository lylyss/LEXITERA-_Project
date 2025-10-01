import React from "react";
import gemideraImg from "../assets/media/IMG/city4.png";
import saluinImg from "../assets/media/mago oscuro/darkSageIMG.trasp.PNG";
import pg5Img from "../assets/media/CHARACTER CONCEPT/pg5.png";
import pg4Img from "../assets/media/CHARACTER CONCEPT/pg4.png";
import pg3Img from "../assets/media/CHARACTER CONCEPT/pg3.png";
import { useNavigate } from "react-router-dom";

const gemideraDesc = `Gemidera è la regione della conoscenza e della magia oscura, dove antichi segreti e incantesimi si tramandano da generazioni.
Le sue città sono centri di studio e mistero, e i suoi abitanti sono rinomati per la loro intelligenza e potere magico.
Gemidera è guidata dal Mago Oscuro, custode delle arti arcane e protettore della regione.

Nel cuore di Gemidera sorgono biblioteche immense e torri di cristallo, dove studiosi e maghi si dedicano alla ricerca di nuove formule e alla decifrazione di antichi manoscritti. I mercati sono animati da alchimisti e incantatori, che vendono pozioni rare e talismani protettivi. Le strade sono avvolte da una nebbia magica che protegge la città dagli sguardi indiscreti.

La vita a Gemidera è scandita da cerimonie e duelli magici, dove solo i più abili possono aspirare a diventare Maestri delle Arti Oscure. Saluin, il Mago Oscuro, è rispettato per la sua saggezza e temuto per la sua potenza: sotto la sua guida, la regione prospera e mantiene il suo equilibrio tra luce e ombra.

Gemidera è il luogo dove la curiosità e la sete di sapere sono premiate, ma dove ogni segreto può nascondere un pericolo. Solo chi è disposto a rischiare può scoprire le verità che si celano tra le sue mura.`;

const saluin = {
  name: "SALUIN",
  img: saluinImg,
  quote: ",,La conoscenza è la vera magia.''",
  desc: [
    "Saluin, il Mago Oscuro di Gemidera, è custode di antichi segreti e incantesimi dimenticati.",
    "La sua mente acuta e la sua magia potente lo rendono un avversario temibile.",
  ],
};

const gemideraNpcs = [
  { name: "Alchimista della Luce", img: pg5Img, role: "Alchimista della Luce" },
  { name: "Sentinella delle Fontane", img: pg4Img, role: "Sentinella delle Fontane" },
  { name: "Studioso delle Rune", img: pg3Img, role: "Studioso delle Rune" },
];

const Gemidera = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#181c24",
        backgroundImage: `url(${gemideraImg})`,
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
        <h1 style={{ color: "#ffd700", marginBottom: "2rem", fontSize: "2.5rem", textShadow: "0 0 8px #000" }}>Regione GEMIDERA</h1>
        <div
          style={{
            background: "rgba(30,30,40,0.8)",
            borderRadius: "0px",
            boxShadow: "0 2px 12px #0008",
            padding: "2rem 2.5rem",
            maxWidth: "600px",
            color: "#fff",
            fontSize: "1.2rem",
            textAlign: "center",
            border: "none",
            marginBottom: "2rem",
          }}
        >
          {gemideraDesc}
        </div>
        {/* Personaggio correlato */}
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
            src={saluin.img}
            alt={saluin.name}
            className="lux-img-hover"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              marginBottom: "1rem",
              border: "none",
              boxShadow: "0 0 12px #0008",
              transition: "transform 0.3s",
            }}
          />
          <h2 style={{ color: "#ffd700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{saluin.name}</h2>
          <div style={{ fontStyle: "italic", marginBottom: "1rem", color: "#ffd700" }}>{saluin.quote}</div>
          {saluin.desc.map((line, i) => (
            <div key={i} style={{ marginBottom: "0.5rem" }}>
              {line}
            </div>
          ))}
        </div>
        {/* NPC aggiuntivi */}
        <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {gemideraNpcs.map((npc, idx) => (
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
                  width: "130px",
                  height: "260px",
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
        `}
      </style>
    </div>
  );
};

export default Gemidera;
