import styles from './FoodForm.module.css'
import Button from '../UI/Button'

const FoodForm = () => {
    return (
        <form className={styles['food-form']}>
            <div className={styles.quantity}>
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" min="1" max="5" step="1" value="1" />
            </div>
            <Button innerText="+ Add"></Button>
        </form>
    )
}

export default FoodForm;