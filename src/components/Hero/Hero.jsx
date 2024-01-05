import Link from 'next/link'
import styles from './hero.module.css'

const Hero = ({ paper, title1, title2, desc, desc2, link }) => {
  return (
    <div className={styles.hero_section}>
        <img src={paper} alt="Prvi dekorativni papir" className={styles.hero_image} />
        <div className={styles.hero_content}>
            <div className={styles.hero_text}>
                <h1><span>{title1}</span><span>{title2}</span></h1>
                <p className={styles.hero_par1}>{desc}</p>
                {
                  desc2 && (
                    <p className={styles.hero_par2}>{desc2}</p>
                  )
                }
                {
                  link && (
                    <Link href={link}>rezerviši mesto</Link>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default Hero