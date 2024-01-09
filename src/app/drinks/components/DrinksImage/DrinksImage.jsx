import Image from 'next/image'
import styles from './drinks-image.module.css'

const DrinksImage = ({ image }) => {
  return (
    <div className={styles.drinks_image}>
        <Image loading='lazy' fill="full" src={image} alt="Slika koktela" />
    </div>
  )
}

export default DrinksImage