"use client";

import { useEffect } from "react";
import styles from "./reservation-hero.module.css";

const ReservationHero = () => {
  useEffect(() => {
    // Add the viewport meta tag dynamically
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);

    // Load the external script dynamically
    const script = document.createElement("script");
    script.src = "https://w.eventlin.com/widget/widget30.min.js";
    script.async = true;

    script.onload = () => {
      // Initialize the script here if needed
      console.log("Script loaded");
    };

    document.head.appendChild(script);

    // Load the external stylesheet dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://w.eventlin.com/widget/widget30.min.css";
    document.head.appendChild(link);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
      document.head.removeChild(viewportMeta);
    };
  }, []);

  const buttonHtml = `<div class="eventlin-btn" name="Magellan" merchantId="6453">nova rezervacija</div>`;

  return (
    <>
      <div className={styles.reservation_hero_section}>
        <img
          src="/paper1.png"
          alt="Prvi dekorativni papir"
          className={styles.reservation_hero_image}
        />
        <div className={styles.reservation_hero_content}>
          <div className={styles.reservation_hero_text}>
            <h1>
              <span>Rezervišite vaše</span>
              <span>mesto za putovanje</span>
            </h1>
            <p>
              Ukoliko želite da rezervišete vaše mesto u našem restoranu, to
              možete uraditi putem formulara kojem možete da pristupite klikom
              na dugme ispod.
            </p>
            <p>Vidimo se uskoro !</p>
            <div dangerouslySetInnerHTML={{ __html: buttonHtml }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationHero;
