import styles from './CartItem.module.css'

const CartItem = ()=> {
    return (
        <li className={styles.box}>
            <div>
                <h2>Sushi</h2>
                <div className={styles.info}>
                    <span className={styles.price}>$22.99</span>
                    <span className={styles.quantity}>x 1</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.control}>−</button>
                <button className={styles.control}>+</button>
            </div>
        </li>
    );
}

export default CartItem;