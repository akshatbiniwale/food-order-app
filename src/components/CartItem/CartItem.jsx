import styles from './CartItem.module.css'

const CartItem = (props)=> {
    return (
        <li className={styles.box}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.info}>
                    <span className={styles.price}>${props.price}</span>
                    <span className={styles.quantity}>x {props.amount}</span>
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