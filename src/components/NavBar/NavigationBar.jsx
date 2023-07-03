import styles from './NavigationBar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = (props)=> {
    return (
        <header className={styles.navbar} onClick={props.showModal}>
            <h1>ReactMeals</h1>
            <div className={styles['add-to-cart']}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={styles.cart}>Your Cart</span>
                <span className={styles['cart-count']}>{props.count}</span>
            </div>
        </header>
    );
}

export default NavigationBar;