"use client"

import styles from './st-component.module.css'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import CardSlider from '../CardSlider/CardSlider'

const STComponent = () => {
  return (
    <div className={styles.st_component}>
        <img className={styles.st_paper_top} src='/paper2.png' alt="Dekorativna slika drugog papira" />
        <img className={styles.st_paper_bottom} src='/paper3.png' alt="Dekorativna slika trećeg papira" />
        <div className={styles.stc_content}>
            <div className={styles.stc_text}>
                <h1 className={styles.stc_title}><span>Moderna umetnost</span><span>na tanjiru.</span></h1>
                <p className={styles.stc_desc1}>Na prvi pogled, malo umetničko delo na tanjiru stvara osećaj zadovoljstva, a njegov sadržaj eksploziju najrazličitijih mirisa i ukusa.</p>
                <p className={styles.stc_desc2}>Harmonija je postignuta onog trenutka kada su sva tri čula zadovoljena, što ujedno označava i početak zajedničkog putovanja</p>
                <Link className={styles.stc_btn} href={'/reservations'}>rezerviši mesto <FaAngleRight /></Link>
            </div>
            <div className={styles.stc_slider}>
                <CardSlider />
            </div>
        </div>
    </div>
  )
}

export default STComponent