import React, { useRef, useEffect, useState } from "react";

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
          // Chiave di sol
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="25" height="25">
            <path
              d="M492.5 104.3L268.5 154.1C261.2 155.7 256 162.2 256 169.7L256 244.1L512 187.2L512 119.9C512 109.7 502.5 102.1 492.5 104.3zM512 340.4L512 220L256 276.9L256 464.1C256 508.3 213 544.1 160 544.1C107 544.1 64 508.3 64 464.1C64 419.9 107 384.1 160 384.1C184.6 384.1 207 391.8 224 404.5L224 169.8C224 147.3 239.6 127.8 261.6 122.9L485.6 73C515.6 66.3 544 89.1 544 119.9L544 400C544 444.2 501 480 448 480C395 480 352 444.2 352 400C352 355.8 395 320 448 320C472.6 320 495 327.7 512 340.4zM512 400C512 373.5 483.3 352 448 352C412.7 352 384 373.5 384 400C384 426.5 412.7 448 448 448C483.3 448 512 426.5 512 400zM224 464C224 437.5 195.3 416 160 416C124.7 416 96 437.5 96 464C96 490.5 124.7 512 160 512C195.3 512 224 490.5 224 464z"
              fill="#000000ff"
            />
          </svg>
        ) : (
          // Tasto pausa
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="25" height="25">
            <path
              d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 248C288 234.7 277.3 224 264 224C250.7 224 240 234.7 240 248L240 392C240 405.3 250.7 416 264 416C277.3 416 288 405.3 288 392L288 248zM400 248C400 234.7 389.3 224 376 224C362.7 224 352 234.7 352 248L352 392C352 405.3 362.7 416 376 416C389.3 416 400 405.3 400 392L400 248z"
              fill="#000000ff"
            />
          </svg>
        )}
      </button>
      <audio ref={audioRef} src="src/assets/media/audio/videoplayback.mp3" autoPlay loop style={{ display: "none" }} />
    </>
  );
};

export default MusicButton;
