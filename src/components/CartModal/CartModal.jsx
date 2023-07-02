import CartItem from '../CartItem/CartItem';
import styles from './CartModal.module.css'

const CartModal = ()=> {
    return (
        <div className={styles.background}>
            <div className={styles['cart-box']}>
                <div>
                    <ul className={styles['item-list']}>
                        <CartItem />
                    </ul>
                    <div className={styles['total-box']}>
                        <span>Total Amount</span>
                        <span>$0.00</span>
                    </div>
                    <div className={styles['close-btn']}>
                        <button className={styles.btn}>Close</button>
                        <button className={styles.order}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModal;