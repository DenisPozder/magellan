"use client"

import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { usePathname } from 'next/navigation';

const HeaderLinks = [
    {
        title: "rezervacije",
        link: '/'
    },
    {
        title: "događaji",
        link: '/events'
    },
    {
        title: "jelovnik",
        link: '/menu'
    },
    {
        title: "vinska karta",
        link: '/wines'
    },
    {
        title: "karta pića",
        link: '/drinks'
    },
    {
        title: "o nama",
        link: '/about'
    },
]

const Header = () => {

    const [ showHeader, setShowHeader ] = useState(false)
    const pathname = usePathname()

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
                    HeaderLinks.map(link => {
                        const isActive = pathname === link.link || (pathname === '/' && link.link === '/')
                        return (
                            <Link href={link.link} key={link.title} className={isActive ? styles.header_link_active : '' }>{link.title}</Link>
                        )
                    })
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