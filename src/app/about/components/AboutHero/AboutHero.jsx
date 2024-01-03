import styles from "./about-hero.module.css";

const AboutHero = () => {
  return (
    <div className={styles.about_hero}>
      <div className={styles.about_hero_content}>
        <div className={styles.about_hero_text}>
          <h1>
            <span>Svetski meni</span>
            <span>na jednom mestu</span>
          </h1>
          <p className={styles.aht_par1}>
            Magellan vas poziva da uživate u različitim ukusima i doživljajima,
            stvarajući atmosferu koja slavi globalnu raznolikost kuhinje.
          </p>
          <p className={styles.aht_par2}>
            Specifičan ambijent restorana upotpunjuje imerzivno
            iskustvo, apaleta internacionalnih ukusa savršeno se slaže sa bogatim
            izborom vina, čineći ga destinacijom koja prevazilazi sve granice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
