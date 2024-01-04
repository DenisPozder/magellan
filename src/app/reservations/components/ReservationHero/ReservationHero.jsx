"use client";

import { useEffect } from "react";
import styles from "./reservation-hero.module.css";

const ReservationHero = () => {
  useEffect(() => {
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
      // Check if the script is present before removing
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
  
      // Check if the link is present before removing
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const buttonHtml = `<div class="eventlin-btn" name="Magellan" merchantId="6453">rezerviši mesto</div>`;

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
            <p className={styles.reservation_par1}>
              Ukoliko želite da rezervišete vaše mesto u našem restoranu, to
              možete uraditi putem formulara kojem možete da pristupite klikom
              na dugme ispod.
            </p>
            <p className={styles.reservation_par2}>Vidimo se uskoro !</p>
            <div className={styles.reservation_btn} dangerouslySetInnerHTML={{ __html: buttonHtml }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationHero;
