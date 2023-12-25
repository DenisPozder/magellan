"use client"

import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HeaderLinks = [
    {
        title: "rezervacije",
        link: '/'
    },
    {
        title: "jelovnik",
        link: '/jelovnik'
    },
    {
        title: "vinska karta",
        link: '/vinska-karta'
    },
    {
        title: "karta pića",
        link: '/karta-pica'
    },
    {
        title: "o nama",
        link: '/o-nama'
    },
]

const Header = () => {

    const [ showHeader, setShowHeader ] = useState(false)

    const toggleHeader = () => {
        setShowHeader(!showHeader)
    }

    const closeHeader = () => {
        setShowHeader(false)
    }

      /*----- Change background on scroll -----*/
    const [ headerScrollColor, setHeaderScrollHeader ] = useState(false)
    const backgroundColor = () => {
        if(window.scrollY > 0) {
            setHeaderScrollHeader(true)
        }else {
            setHeaderScrollHeader(false)
        }
    }
    
    const headerClass = `${styles.header_section} ${headerScrollColor ? styles.header_scroll : ""}`
      
  useEffect(() => {
      window.addEventListener('scroll', backgroundColor)
      
      return () => {
          window.removeEventListener('scroll', backgroundColor)
      }
  },[])

  return (
    <header className={headerClass}>
        <div className={styles.header_content}>
            <Link href={'/'} className={styles.header_logo}>
                <img src="/magellan-white.png" alt="Beli logo restorana" />
            </Link>
            <div className={`${styles.header_links} ${showHeader ? styles.show : ""}`}>
                <div className={styles.header_close_content}>
                    <button className={styles.header_close} onClick={closeHeader}>
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                {
                    HeaderLinks.map(link => (
                        <Link href={link.link} key={link.title}>{link.title}</Link>
                    ))
                }
            </div>
            <div className={styles.header_toggle_content}>
            <button className={styles.header_toggle} onClick={toggleHeader}>
                <FaBars />
            </button>
            </div>
        </div>
    </header>
  )
}

export default Header