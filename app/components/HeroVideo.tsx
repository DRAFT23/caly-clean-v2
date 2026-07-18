"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // On ne sait pas côté serveur si l'utilisateur est sur mobile ou desktop.
  // On attend le montage client pour vérifier le viewport avant de décider
  // de monter (ou non) la balise <video>. Résultat concret : sur desktop,
  // ce composant est de toute façon caché en CSS (Hero.tsx), donc on ne
  // rend même pas le <video> et le fichier de 655 Ko n'est jamais téléchargé.
  // Avant ce correctif, le <video preload="auto"> était monté dans les deux
  // cas et le navigateur le chargeait même invisible sur desktop.
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setShouldRenderVideo(mql.matches);

    const onChange = (e: MediaQueryListEvent) => setShouldRenderVideo(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldRenderVideo) return;

    video.muted = true;
    video.playsInline = true;

    const tryPlay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    // Tentative immédiate au montage (ne dépend pas du "load" global de la
    // page, qui peut mettre du temps à se déclencher sur mobile).
    tryPlay();

    const onLoaded = () => {
      window.setTimeout(tryPlay, 250);
    };

    if (document.readyState === "complete") {
      window.setTimeout(tryPlay, 250);
    } else {
      window.addEventListener("load", onLoaded);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);

    return () => {
      window.removeEventListener("load", onLoaded);
      observer.disconnect();
    };
  }, [shouldRenderVideo]);

  return (
    <>
      <Image
        src="/hero-portrait.webp"
        alt="Caly Nails"
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldRenderVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-portrait.webp"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
