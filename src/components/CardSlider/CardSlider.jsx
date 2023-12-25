"use client";
import { useEffect, useState } from "react";
import styles from "./card-slider.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const slideWidth = 320;

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

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}px)`,
    },
    item: _items[idx].item,
  };

  switch (position) {
    case length - 1:
      item.styles = {
        ...item.styles,
        height: "380px",
        top: "30px",
        left: "140px",
        opacity: ".6",
      };
      break;
    case length + 1:
      item.styles = {
        ...item.styles,
        height: "380px",
        top: "30px",
        left: "-140px",
        opacity: ".6",
      };
      break;
    case length:
      item.styles = { ...item.styles, zIndex: "2" };
      break;
    default:
      item.styles = {
        ...item.styles,
        opacity: 0,
        height: "380px",
        top: "30px",
      };
      break;
  }

  return item;
};

const SliderCard = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <div className={styles.slider_card} style={item.styles}>
      <img src={item.item.image} alt="Slika" />
      <div className={styles.slider_card_box}>
        <div className={styles.scb_left}>
          <img src="/label.png" alt="Magellan michelin" />
        </div>
        <div className={styles.scb_right}>
          <div className={styles.scb_right_top}>
            <h3 className={styles.scb_title}>
              <span>{item.item.firstTitle}</span>
              <span>{item.item.secondTitle}</span>
            </h3>
            <h3 className={styles.scb_price}>{item.item.price}RSD</h3>
          </div>
          <div className={styles.scb_right_bottom}>
            <p>{item.item.ing}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const keys = Array.from(Array(_items.length).keys());

const CardSlider = () => {
  const [items, setItems] = useState(keys);
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
