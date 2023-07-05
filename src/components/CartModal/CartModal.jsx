import CartItem from '../CartItem/CartItem';
import styles from './CartModal.module.css'

const CartModal = (props)=> {
    return (
        <div className={styles.background} onClick={props.closeModal}>
            <div className={styles['cart-box']}>
                <div>
                    <ul className={styles['item-list']}>
                        {props.mealsAdded.map((meal)=> {
                            return(
                                <CartItem
                                    key={meal.id}
                                    name={meal.name}
                                    price={meal.price}
                                    amount={meal.amount}
                                />
                            );
                        })}
                    </ul>
                    <div className={styles['total-box']}>
                        <span>Total Amount</span>
                        <span>${props.totalCost}</span>
                    </div>
                    <div className={styles['close-btn']}>
                        <button className={styles.btn} onClick={props.closeModal}>Close</button>
                        <button className={styles.order}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModal;