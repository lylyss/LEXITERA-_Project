import React, { useRef, useEffect, useState } from "react";

// Icona custom per audio OFF
function StreamlineMusicNoteOff2Solid(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 14 14" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.22 1.28A.75.75 0 0 1 1.28.22L3.9 2.838c.158-.187.37-.322.607-.387L12.083.35a1.217 1.217 0 0 1 1.534 1.168v7.185q.006.087.006.174c0 .997-.592 1.855-1.443 2.243l1.6 1.6a.75.75 0 1 1-1.06 1.061zm8.697 6.577A2.463 2.463 0 0 1 12.13 6.61V4.153L6.731 5.67zM3.61 9.06V6.243L5.097 7.73v3.42q.006.086.006.174A2.463 2.463 0 1 1 3.609 9.06"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

const MusicButton = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(() => {
    const saved = localStorage.getItem("musicPlaying");
    return saved === null ? true : saved === "true";
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      // Avvia la musica solo se playing è true
      if (playing) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  // All'avvio pagina, se playing è true, avvia la musica
  useEffect(() => {
    if (audioRef.current && playing) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, [playing]);

  useEffect(() => {
    localStorage.setItem("musicPlaying", playing);
  }, [playing]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    setPlaying((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleAudio} className="music-button" aria-label={playing ? "Pausa musica" : "Riproduci musica"}>
        {playing ? (
          // Icona custom per musica accesa
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="30" height="30">
            <path
              d="M532 71C539.6 77.1 544 86.3 544 96L544 400C544 444.2 501 480 448 480C395 480 352 444.2 352 400C352 355.8 395 320 448 320C459.2 320 470 321.6 480 324.6L480 207.9L256 257.7L256 464C256 508.2 213 544 160 544C107 544 64 508.2 64 464C64 419.8 107 384 160 384C171.2 384 182 385.6 192 388.6L192 160C192 145 202.4 132 217.1 128.8L505.1 64.8C514.6 62.7 524.5 65 532.1 71.1z"
              fill="#ffffffff"
            />
          </svg>
        ) : (
          // Icona custom audio OFF
          <StreamlineMusicNoteOff2Solid style={{ color: "#ffffffff" }} />
        )}
      </button>
      <audio ref={audioRef} src="src/assets/media/audio/videoplayback.mp3" autoPlay loop style={{ display: "none" }} />
    </>
  );
};

export default MusicButton;
