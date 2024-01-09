import ReviewForm from '../ReviewForm/ReviewForm'
import ReviewSlider from '../ReviewSlider/ReviewSlider'
import styles from './ra-component.module.css'

const ReviewData = [
    {
        name: "Nikola Petrović",
        date: "12/10/2023",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Nikola Perović",
        date: "12/10/2023",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Maja Dragić",
        date: "12/10/2023",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Michael Malone",
        date: "12/10/2023",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Stojan Petrović",
        date: "12/10/2023",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
]

const RAComponent = () => {
  return (
    <div className={styles.ra_component}>
        <img src="/paper2.png" alt="Dekorativni papir 1" className={styles.ra_component_img} />
        <div className={styles.ra_component_content}>
            <ReviewSlider data={ReviewData} />
            <ReviewForm />
        </div>
    </div>
  )
}

export default RAComponent