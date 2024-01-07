"use client"

import { useEffect, useRef, useState } from 'react'
import styles from './event-slider.module.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Link from 'next/link'

const EventsData = [
    {
        title: "Dani vina",
        duration: "od 11.3 do 15.3 u magellan-u",
        image: "/coffee.jpg"
    },
    {
        title: "Dani vina 2",
        duration: "od 11.3 do 15.3 u magellan-u",
        image: "/coffee.jpg"
    },
    {
        title: "Dani vina 3",
        duration: "od 11.3 do 15.3 u magellan-u",
        image: "/coffee.jpg"
    },
]

const EventSlider = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0)
    const slideInterval = useRef()

    const startSliderTimer = () => {
        stopSliderTimer()

        slideInterval.current = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < EventsData.length - 1 ? currentSlide + 1 : 0)
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

        const index = currentSlide > 0 ? currentSlide - 1 : EventsData.length - 1
        setCurrentSlide(index)
    }

    const next = () => {
        startSliderTimer()

        const index = currentSlide < EventsData.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

  return (
    <div className={styles.events_slider}>
        <div className={styles.events_slider_carousel}>
            <button className={`${styles.events_slider_btn} ${styles.events_slider_prev}`} onClick={prev}><AiOutlineLeft /></button>
            <div className={styles.events_slider_inner} style={{transform: `translateX(${-currentSlide * 100}%)`}}>
                {
                    EventsData.map(event => (
                        <div className={styles.events_slider_item} key={event.title} onMouseEnter={stopSliderTimer} onMouseLeave={startSliderTimer}>
                            <img src={event.image} alt={event.title} />
                            <div className={styles.event_item_content}>
                                <div className={styles.event_item_text}>
                                    <h1>{event.title}</h1>
                                    <h2>{event.duration}</h2>
                                    <Link href={"#"}>saznajte više</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={`${styles.events_slider_btn} ${styles.events_slider_next}`} onClick={next}><AiOutlineRight /></button>
        </div>
    </div>
  )
}

export default EventSlider