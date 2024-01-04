"use client"

import { useEffect, useRef, useState } from 'react'
import styles from './reservation-slider.module.css'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const RestaurantInterior = [
  {
    id: 1,
    image: '/magellanImg.jpg'
  },
  {
    id: 2,
    image: '/magellanImg2.jpg'
  },
  {
    id: 3,
    image: '/magellanImg.jpg'
  },
]

const ReservationSlider = () => {

  const [ currentSlide, setCurrentSlide ] = useState(0)
  const slideInterval = useRef()

  const startSliderTimer = () => {
    stopSliderTimer()

    slideInterval.current = setInterval(() => {
        setCurrentSlide(currentSlide => currentSlide < RestaurantInterior.length - 1 ? currentSlide + 1 : 0)
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

    const index = currentSlide > 0 ? currentSlide - 1 : RestaurantInterior.length - 1
    setCurrentSlide(index)
  }

  const next = () => {
    startSliderTimer()

    const index = currentSlide < RestaurantInterior.length - 1 ? currentSlide + 1 : 0
    setCurrentSlide(index)
  }

  return (
    <div className={styles.reservation_slider}>
      <div className={styles.rs_carousel}>
        <div className={styles.rs_btns}>
          <button onClick={prev} className={`${styles.rs_btn} ${styles.rs_prev}`}><AiOutlineUp /></button>
          <button onClick={next} className={`${styles.rs_btn} ${styles.rs_next}`}><AiOutlineDown /></button>
        </div>
        <div className={styles.rs_inner} style={{transform: `translateY(${-currentSlide * 100}%)`}}>
          {
            RestaurantInterior.map(interior => (
              <div className={styles.rs_item} key={interior.id} onMouseEnter={stopSliderTimer} onMouseLeave={startSliderTimer}>
                <img src={interior.image} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ReservationSlider