import Link from "next/link";
import styles from "./wines-hero.module.css";

const WinesHero = () => {
  return (
    <div className={styles.wines_hero}>
      <img
        src="/paper1.png"
        alt="Prvi dekorativni papir"
        className={styles.wines_hero_img}
      />
      <div className={styles.wines_hero_content}>
        <div className={styles.wines_hero_text}>
          <h1>
            <span>Vrhunska selekcija</span>
            <span>svetskih vina</span>
          </h1>
          <p>
            Ova pažljivo odabrana kolekcija pruža nezaboravno
            iskustvo uživanja u vrhunskim vinima iz različitih vinogradarskih regija
          </p>
          <Link href='/reservations'>rezerviši mesto</Link>
        </div>
      </div>
    </div>
  );
};

export default WinesHero;
