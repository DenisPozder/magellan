import styles from './st-component.module.css'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import CardSlider from '../CardSlider/CardSlider'

const _items = [
  {
    item: {
      id: 1,
      image: "/menuImg.jpg",
      firstTitle: "Biftek",
      secondTitle: "'a la tartare'",
      ing: "100% juneće mese, žumance, tartar sos, listići bosiljka",
      price: 1850,
    },
  },
  {
    item: {
      id: 2,
      image: "/menuImg.jpg",
      firstTitle: "Biftek",
      secondTitle: "'a la tartare'",
      ing: "100% juneće mese, žumance, tartar sos, listići bosiljka",
      price: 1850,
    },
  },
  {
    item: {
      id: 3,
      image: "/menuImg.jpg",
      firstTitle: "Biftek",
      secondTitle: "'a la tartare'",
      ing: "100% juneće mese, žumance, tartar sos, listići bosiljka",
      price: 1850,
    },
  },
  {
    item: {
      id: 4,
      image: "/menuImg.jpg",
      firstTitle: "Biftek",
      secondTitle: "'a la tartare'",
      ing: "100% juneće mese, žumance, tartar sos, listići bosiljka",
      price: 1850,
    },
  },
  {
    item: {
      id: 5,
      image: "/menuImg.jpg",
      firstTitle: "Biftek",
      secondTitle: "'a la tartare'",
      ing: "100% juneće mese, žumance, tartar sos, listići bosiljka",
      price: 1850,
    },
  },
  {
    item: {
      id: 6,
      image: "/menuImg.jpg",
      firstTitle: "Biftek",
      secondTitle: "'a la tartare'",
      ing: "100% juneće mese, žumance, tartar sos, listići bosiljka",
      price: 1850,
    },
  },
];

const STComponent = () => {
  return (
    <div className={styles.st_component}>
        <img className={styles.st_paper_top} src='/paper2.png' alt="Dekorativna slika drugog papira" />
        <img className={styles.st_paper_bottom} src='/paper3.png' alt="Dekorativna slika trećeg papira" />
        <div className={styles.stc_content}>
            <div className={styles.stc_text}>
                <h1 className={styles.stc_title}><span>Svet koktela</span><span>na jednom mestu.</span></h1>
                <p className={styles.stc_desc1}>Bez obzira na vašu preferencu, naši kokteli su osmišljeni da unaprede vaše gastronomsko iskustvo i učine svaku posetu nezaboravnom.</p>
                <p className={styles.stc_desc2}>Podignime čaše u slavu umetnosti miksologije i istraživanja ukusa!</p>
                <Link className={styles.stc_btn} href={'#'}>karta pića <FaAngleRight /></Link>
            </div>
            <div className={styles.stc_slider}>
                <CardSlider />
            </div>
        </div>
    </div>
  )
}

export default STComponent