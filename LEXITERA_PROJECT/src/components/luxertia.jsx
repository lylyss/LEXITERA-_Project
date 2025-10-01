import React from "react";
import { useNavigate } from "react-router-dom";
import luxertiaImg from "../assets/media/IMG/santurary.png";
import luxImg from "../assets/media/maga di luce/luxBG.trasp.PNG";
// Importa tutte le immagini NPC fornite
import pg8Img from "../assets/media/CHARACTER CONCEPT/pg8.png";
import pg7Img from "../assets/media/CHARACTER CONCEPT/pg7.png";
import pg6Img from "../assets/media/CHARACTER CONCEPT/pg6.png";

const luxertiaDesc = `Luxertia è la regione della luce e della speranza, dove la magia luminosa permea ogni cosa.
Le sue città brillano di energia positiva e i suoi abitanti sono noti per la loro gentilezza e il loro spirito protettivo.
Luxertia è guidata dalla Maga di Luce, che protegge la regione e ispira tutti con la sua saggezza.

Nel centro di Luxertia si trova il Santuario della Luce, un luogo sacro dove i maghi si riuniscono per celebrare i riti della rinascita e della guarigione. I giardini sono ricchi di fiori magici che emanano profumi inebrianti e colori vividi, mentre le fontane di energia pura donano forza e serenità agli abitanti.

La vita a Luxertia è scandita da feste e celebrazioni, dove la comunità si riunisce per condividere storie e tramandare insegnamenti. Lux, la Maga di Luce, è amata da tutti per la sua generosità e la sua capacità di dissipare le tenebre con un semplice gesto. Sotto la sua guida, la regione è diventata simbolo di pace e prosperità.

Luxertia è la terra dove la speranza non muore mai, e dove ogni giorno è un nuovo inizio illuminato dalla magia della luce. Chiunque visiti Luxertia porta con sé un ricordo di bellezza e armonia che dura per sempre.`;

const lux = {
  name: "LUX",
  img: luxImg,
  quote: ",,La luce guiderà il nostro destino.''",
  desc: ["Lux, la Maga di Luce di Luxertia, porta speranza e protezione con la sua magia luminosa.", "La sua gentilezza illumina anche i tempi più oscuri."],
};

// Lista NPC Luxertia con immagini fornite
const luxertiaNpcs = [
  { name: "Guaritore Magico", img: pg8Img, role: "Guaritore Magico" },
  { name: "Custode dei Giardini", img: pg7Img, role: "Custode dei Giardini" },
  { name: "Messaggero della Speranza", img: pg6Img, role: "Messaggero della Speranza" },
];

const Luxertia = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#181c24",
        backgroundImage: `url(${luxertiaImg})`,
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
        <h1 style={{ color: "#ffd700", marginBottom: "2rem", fontSize: "2.5rem", textShadow: "0 0 8px #000" }}>Regione LUXERTIA</h1>
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
          {luxertiaDesc}
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
            src={lux.img}
            alt={lux.name}
            className="lux-img-hover"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "0px",
              marginBottom: "1rem",
              border: "none",
              boxShadow: "0 0 12px #0008",
              transition: "transform 0.3s",
            }}
          />
          <h2 style={{ color: "#ffd700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{lux.name}</h2>
          <div style={{ fontStyle: "italic", marginBottom: "1rem", color: "#ffd700" }}>{lux.quote}</div>
          {lux.desc.map((line, i) => (
            <div key={i} style={{ marginBottom: "0.5rem" }}>
              {line}
            </div>
          ))}
        </div>
        {/* NPC aggiuntivi */}
        <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {luxertiaNpcs.map((npc, idx) => (
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
export default Luxertia;
