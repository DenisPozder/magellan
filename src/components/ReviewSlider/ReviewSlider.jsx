"use client"

import styles from './review-slider.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight, FaStar } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const NextArrow = (props) => {
    const {onClick} = props
    return (
        <button className={`${styles.review_slider_btn} ${styles.review_slider_next}`} onClick={onClick}><FaChevronRight /></button>
    )
}

const PrevArrow = (props) => {
    const {onClick} = props
    return (
        <button className={`${styles.review_slider_btn} ${styles.review_slider_prev}`} onClick={onClick}><FaChevronLeft /></button>
    )
}

const ReviewSlider = ({ data }) => {
    const settings = {
        className: "center",
        autoplay: true,
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 400,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className={styles.review_slider}>
            <h1 className={styles.rs_title}>Iskustva sa putovanja</h1>
            <div className={styles.review_slider_content}>
                <Slider {...settings}>
                    {
                        data.map((card, index) => (
                            <div key={index} className={styles.review_slider_card}>
                                <div className={styles.review_slider_inner}>
                                    <div className={styles.rsi_text}>
                                        <h1>{card.name}</h1>
                                        <p className={styles.rsi_date}>{card.date}</p>
                                        <div className={styles.rsit_star}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <p className={styles.rsi_comment}>{card.comment}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default ReviewSlider