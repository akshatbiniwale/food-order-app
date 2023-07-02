import styles from './FoodItem.module.css'
import Button from '../UI/Button'

const FoodItem = ()=> {
    return(
        <div className={styles['food-item']}>
            <div>
                <h3 className={styles['food-name']}>Sushi</h3>
                <div className={styles['food-desc']}>Finest fish and veggies</div>
                <div className={styles['food-cost']}>$22.99</div>
            </div>
            <div>
                <form className={styles['food-form']}>
                    <div className={styles.quantity}>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" min="1" max="5" step="1" value="1" />
                    </div>
                    <Button innerText="+Add"></Button>
                </form>
            </div>
        </div>
    );
}

export default FoodItem;