"use client"

import { useEffect, useRef, useState } from 'react'
import styles from './wines-slider.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const WinesItems = [
    {
        title: "Penušava vina",
        image: "/redWine.jpg",
    },
    {
        title: "Bela vina",
        image: "/redWine.jpg",
    },
    {
        title: "Roze vina",
        image: "/redWine.jpg",
    },
    {
        title: "Crvena vina",
        image: "/redWine.jpg",
    },
    {
        title: "Specijalna vina",
        image: "/redWine.jpg",
    },
    {
        title: "Magnum",
        image: "/redWine.jpg",
    },
]

const WinesSlider = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0)
    const slideInterval = useRef()

    const startSliderTimer = () => {
        stopSliderTimer()

        slideInterval.current = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < WinesItems.length - 1 ? currentSlide + 1 : 0)
        }, 3000)
    }

    const stopSliderTimer = () => {
        if(slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    useEffect(() => {
        startSliderTimer()

        return () => stopSliderTimer()
    },[])

    const prev = () => {
        startSliderTimer()

        const index = currentSlide > 0 ? currentSlide - 1 : WinesItems.length - 1
        setCurrentSlide(index)
    }

    const next = () => {
        startSliderTimer()

        const index = currentSlide < WinesItems.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

  return (
    <div className={styles.wines_slider}>
        <div className={styles.wines_slider_carousel}>
            <button className={`${styles.wines_slider_btn} ${styles.wines_slider_prev}`} onClick={prev}><AiOutlineLeft /></button>
            <div className={styles.wines_slider_inner} style={{transform: `translateX(${-currentSlide * 100}%)`}}>
                {
                    WinesItems.map(wine => (
                        <div className={styles.wines_slider_item} key={wine.title} onMouseEnter={stopSliderTimer} onMouseLeave={startSliderTimer}>
                            <img src={wine.image} alt={wine.title} />
                            <div className={styles.wines_slider_overlay}>
                                <h1 className={styles.wines_slider_title}>{wine.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={`${styles.wines_slider_btn} ${styles.wines_slider_next}`} onClick={next}><AiOutlineRight /></button>
        </div>
    </div>
  )
}

export default WinesSlider