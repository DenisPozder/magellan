import Link from 'next/link'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero_section}>
        <img src="/paper1.png" alt="Prvi dekorativni papir" className={styles.hero_image} />
        <div className={styles.hero_content}>
            <div className={styles.hero_text}>
                <h1><span>Putujte kroz</span><span>svet ukusa.</span></h1>
                <p>U prijatnoj atmosferi našeg restorana, krenite na put oko sveta. Sigurni smo da čak i najzahtevnije sladokusce nećemo ostaviti ravnodušnim.</p>
                <Link href={'/reservations'}>rezerviši mesto</Link>
            </div>
            <div className={styles.hero_icons}>
                <button className={styles.hero_parking}>P</button>
                <button className={styles.hero_openh}><span>radno</span><span>vreme</span></button>
            </div>
        </div>
    </div>
  )
}

export default Hero