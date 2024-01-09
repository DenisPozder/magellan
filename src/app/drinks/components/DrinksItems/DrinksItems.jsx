import styles from './drinks-items.module.css'

const DrinksItems = ({ paper1, paper2, data }) => {
  return (
    <div className={styles.drinks_items}>
        <img src={paper1} alt="Dekorativni papir 2" className={styles.drinks_items_paper1} />
        <div className={styles.drinks_items_content}>
            <div className={styles.drinks_items_text}>
                {
                    data.map(drink => (
                        <div className={styles.drink_item} key={drink.title}>
                            <h1>{drink.title}</h1>
                            <div className={styles.drink_items}>
                                {
                                    drink.drinks.map(drinkItem => (
                                        <div key={drinkItem.title} className={styles.drink_item_content}>
                                            <p className={styles.dic_p}>
                                            <span>{drinkItem.title}</span>
                                            {
                                                drinkItem.subTitle && (
                                                    <span>{drinkItem.subTitle}</span>
                                                )
                                            }
                                            </p>
                                            {
                                                drinkItem.percentage && (
                                                    <p className={styles.drink_item_percentage}>{drinkItem.percentage}</p>
                                                )
                                            }
                                            {
                                                drinkItem.neto && (
                                                    <p className={styles.drink_item_neto}>{drinkItem.neto}</p>
                                                )
                                            }
                                            <p className={styles.drink_item_price}>{drinkItem.price}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        {
            paper2 && (
                <img src={paper2} alt="Dekorativni papir 3" className={styles.drinks_items_paper2} />
            )
        }
    </div>
  )
}

export default DrinksItems