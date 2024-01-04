import ReservationHero from "./components/ReservationHero/ReservationHero"
import ReservationSlider from "./components/ReservationSlider/ReservationSlider"
import styles from './reservations.module.css'


const page = () => {
  return (
    <>
    <div>
      <ReservationHero />
      <ReservationSlider />
      <div className={styles.reservations_paper}>
        <img src="/paper4.png" alt="Dekorativni papir 4" />
      </div>
    </div>
    </>
  )
}

export default page