"use client"

import { useState } from 'react';
import styles from './all-wines.module.css'
import { CiSearch } from "react-icons/ci";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const allWines = [
    {
        id: 1,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 2,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 3,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 4,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 5,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 6,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 7,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 8,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 9,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 10,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 11,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 12,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 13,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 14,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 15,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 16,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 17,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 18,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 19,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 20,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 21,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 22,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 23,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 24,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 25,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
    {
        id: 26,
        title1: "CUVEE NO.1 2017",
        title2: "Zvonko Bogdan / Palič / Srbija",
        quantity: "0.75L",
        percentage: "14.0%",
        price: "4,500"
    },
]

const AllWines = () => {
    const [ currentPage, setCurrentPage ] = useState(1)
    const itemsPerPage = 25
    const [ searchQuery, setSearchQuery ] = useState('')

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const filteredWines = allWines.filter((wine) =>
        wine.title1.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Calculate total pages based on filtered wines
    const totalWines = filteredWines.length;
    const totalPages = Math.ceil(totalWines / itemsPerPage);

    // Get the subset of wines to display on the current page
    const winesToShow = filteredWines.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
        setCurrentPage(1)
    }

    const paginationBtns = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationBtns.push(
            <button className={styles.aws_btn_number} key={i} disabled={i === currentPage} onClick={() => handlePageChange(i)}>
                {i}
            </button>
        );
    }

  return (
    <div className={styles.all_wines}>
        <img src='/paper2.png' alt="Drugi dekorativni papir" className={styles.all_wines_paper} />
        <div className={styles.all_wines_container}>
            <div className={styles.all_wines_content}>
                <div className={styles.all_wines_bottle}>
                    <img src="/wineBottle.png" alt="Flaša vina" />
                </div>
                <div className={styles.all_wines_section}>
                    <div className={styles.aws_search_content}>
                        <input type="search" placeholder='Pretražite vina' value={searchQuery} onChange={handleSearchChange} />
                        <button className={styles.aws_search_btn}>
                            <CiSearch />
                        </button>
                    </div>
                    {/*----- Mapping all wines -----*/}
                    <div className={styles.aws_wines}>
                        {
                            winesToShow.map(wine => (
                                <div key={wine.id} className={styles.wine_section}>
                                    <div className={styles.wine_title}>
                                        <h3>{wine.title1}</h3>
                                        <p>{wine.title2}</p>
                                    </div>
                                    <p className={styles.wine_quantity}>{wine.quantity}</p>
                                    <p className={styles.wine_percentage}>{wine.percentage}</p>
                                    <p className={styles.wine_price}>{wine.price}</p>
                                </div>
                            ))
                        }
                    </div>
                    {
                        totalWines > 0 && (
                            <div className={styles.aws_pagination}>
                                <button className={`${styles.aws_btn} ${styles.aws_btn_prev}`} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><AiOutlineLeft /></button>
                                    {paginationBtns}
                                <button className={`${styles.aws_btn} ${styles.aws_btn_next}`} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><AiOutlineRight /></button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllWines