"use client";

import { FaInstagram, FaStar } from "react-icons/fa";
import styles from "./review-form.module.css";
import Link from "next/link";
import Rating from "../Star/Star";
import { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className={styles.review_form}>
      <div className={styles.review_form_content}>
        <div className={styles.rfc_text}>
          <h1>
            <span>Podelite vaš</span>
            <span>doživaljaj sa nama</span>
          </h1>
          <p className={styles.rfc_text_par1}>
            Imate predlog kako bismo mogli da unapredimo iskustvo naših
            posetioca ili vam se posebno svidelo nešto u našoj ponudi.
          </p>
          <p className={styles.rfc_text_par2}>
            Podelite to sa nama ispunjavanjem sledečeg formulara ili na
            instagram profilu:
          </p>
          <Link
            href={"https://www.instagram.com/restoranmagellan/"}
            target="_blank"
          >
            <FaInstagram /> <span>@magellan_1519</span>
          </Link>
        </div>
        <div className={styles.rfc_form}>
          <form>
            <input
              className={styles.rfc_input1}
              type="text"
              placeholder="Ime i prezime"
            />
            <input
              className={styles.rfc_input2}
              type="emial"
              placeholder="Email"
            />
            <div className={styles.rfc_stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`${styles.rfc_star} ${
                    star <= rating ? styles.selected : ""
                  }`}
                  onClick={() => handleStarClick(star)}
                ><FaStar /></span>
              ))}
            </div>
            <textarea placeholder="Više detalja ( maksimum 400 karaktera )"></textarea>
            <button className={styles.rfc_form_btn}>Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
