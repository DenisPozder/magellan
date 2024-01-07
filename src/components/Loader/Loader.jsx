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
          <div className={styles.loader_content}>
            <img src="/magellan-white.png" alt="Loader logo" />
            <Rudder />
            <p>dobrodošli</p>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
