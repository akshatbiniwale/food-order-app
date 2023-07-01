import styles from './NavigationBar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = ()=> {
    return (
        <div className={styles.navbar}>
            <h1>ReactMeals</h1>
            <div className={styles['add-to-cart']}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={styles.cart}>Your Cart</span>
                <span className={styles['cart-count']}>0</span>
            </div>
        </div>
    );
}

export default NavigationBar;