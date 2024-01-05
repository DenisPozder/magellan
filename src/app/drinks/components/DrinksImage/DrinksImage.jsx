import styles from './drinks-image.module.css'

const DrinksImage = ({ image }) => {
  return (
    <div className={styles.drinks_image}>
        <img src={image} alt="Slika koktela" />
    </div>
  )
}

export default DrinksImage