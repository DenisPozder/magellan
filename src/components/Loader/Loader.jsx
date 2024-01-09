"use client";

import Rudder from "@/svg/Rudder";
import styles from "./loader.module.css";
import { useEffect, useState } from "react";

const Loader = ({ children }) => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <div className={styles.loader}>
          <img src="/paper2.png" alt="Dekorativni papir 2" className={styles.loader_paper1} />
          <div className={styles.loader_content}>
            <img src="/magellan-white.png" alt="Loader logo" />
            <Rudder />
            <p>dobrodošli</p>
          </div>
          <img src="/paper3.png" alt="Dekorativni papir3" className={styles.loader_paper2} />
        </div>
       ) : (
        children
      )}
    </>
  );
};

export default Loader;
