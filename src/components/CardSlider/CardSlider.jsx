"use client";
import { useEffect, useState } from "react";
import styles from "./card-slider.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import SliderCard from "./SliderCard/SliderCard";

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const CardSlider = ({data, length}) => {
  const [items, setItems] = useState(data);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <>
      <div className={styles.card_slider_wrap}>
        <div className={styles.card_slider_inner}>
          <div className={styles.card_slider_container}>
            <button
              className={`${styles.card_slider_btn} ${styles.card_slider_prev}`}
              onClick={() => prevClick()}
            >
              <FaAngleLeft />
            </button>
            <div className={styles.card_slider_list}>
              {items.map((pos, i) => (
                <SliderCard key={i} pos={pos} idx={i} />
              ))}
            </div>
            <button
              className={`${styles.card_slider_btn} ${styles.card_slider_next}`}
              onClick={() => nextClick()}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.card_slider_dots}>
        {items.slice(0, length).map((pos, i) => (
          <button
            pos={pos}
            key={i}
            onClick={() => handleDotClick(i)}
            className={`${i === activeIdx ? styles.active : ""}`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default CardSlider;
