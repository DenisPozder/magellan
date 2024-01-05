import Link from 'next/link'
import styles from './drinks-hero.module.css'

const DrinksHero = () => {
  return (
    <div className={styles.drinks_hero}>
        <img src="/paper1.png" alt="Dekorativni papir 1" className={styles.drinks_hero_image} />
        <div className={styles.drinks_hero_content}>
            <div className={styles.drinks_hero_text}>
                <h1><span>Magellan</span><span>karta pića</span></h1>
                <p>Raznovrsna karta pića restorana oduševljava širokim spektrom pažljivo odabranih vina, osvežavajućih koktela i vrhunskih alkoholnih pića.</p>
                <Link href={'/reservations'}>rezerviši mesto</Link>
            </div>
        </div>
    </div>
  )
}

export default DrinksHero