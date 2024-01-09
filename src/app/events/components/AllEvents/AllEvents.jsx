import EventCard from '../EventCard/EventCard'
import styles from './all-events.module.css'

export const AllEventsData = [
    {
        id: 1,
        title1: "Novi meni od",
        title2: "nove godine",
        category: "vesti",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/coffee.jpg",
    },
    {
        id: 2,
        title1: "Novi meni od",
        title2: "nove godine",
        category: "vesti",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/coffee.jpg",
    },
    {
        id: 3,
        title1: "Novi meni od",
        title2: "nove godine",
        category: "vesti",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/coffee.jpg",
    },
]

const AllEvents = () => {
  return (
    <div className={styles.all_events}>
        <img src="/paper4.png" alt="Dekorativni papir 4" className={styles.all_events_img} />
        <div className={styles.all_events_section}>
            <div className={styles.all_events_content}>
                {
                    AllEventsData.map((event, index) => (
                        <EventCard key={index} event={event} alternate={index % 2 === 1} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AllEvents