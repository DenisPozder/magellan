import React from "react";
import styles from '../card-slider.module.css'
import { createItem } from "@/components/STComponent/STComponent";

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

export default SliderCard;
