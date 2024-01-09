import Image from 'next/image';
import styles from './it-component.module.css'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa";

const ITComponent = ({ image, firstTitle, secondTitle, price, desc, link, linkTitle }) => {
  return (
    <div className={styles.it_component}>
        <Image fill="full" src={image} alt={firstTitle + ' ' + secondTitle} loading='lazy' />
        <div className={styles.itc_wrap}>
            <div className={styles.itc_content}>
                <div className={styles.itc_box}>
                    <div className={styles.itc_box_content}>
                        <h1 className={styles.itc_title}><span>{firstTitle}</span><span>{secondTitle}</span></h1>
                        <p className={styles.itc_desc}>{desc}</p>
                        {
                            price && (<h1 className={styles.itc_price}>{price}</h1>)
                        }
                        <Link href={link}>{linkTitle} <FaAngleRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ITComponent