import Link from 'next/link'
import styles from './event-card.module.css'

const EventCard = ({event, alternate}) => {
  return (
    <div className={`${styles.event_card} ${alternate ? styles.event_card_alternate : ''}`}>
        <div className={styles.event_card_img}>
            <img src={event.image} alt={event.title} />
        </div>
        <div className={styles.event_card_text}>
            <p className={styles.ec_category}>{event.category}</p>
            <h1 className={styles.ec_title}><span>{event.title1}</span><span>{event.title2}</span></h1>
            <p className={styles.ec_desc}>{event.desc}</p>
            <Link href={`#`}>više informacija</Link>
        </div>
    </div>
  )
}

export default EventCard