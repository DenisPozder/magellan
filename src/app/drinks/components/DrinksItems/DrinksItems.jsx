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
                                            <h3>
                                            <span>{drinkItem.title}</span>
                                            {
                                                drinkItem.subTitle && (
                                                    <span>{drinkItem.subTitle}</span>
                                                )
                                            }
                                            </h3>
                                            {
                                                drinkItem.percentage && (
                                                    <p>{drinkItem.percentage}</p>
                                                )
                                            }
                                            {
                                                drinkItem.neto && (
                                                    <p>{drinkItem.neto}</p>
                                                )
                                            }
                                            <p>{drinkItem.price}</p>
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