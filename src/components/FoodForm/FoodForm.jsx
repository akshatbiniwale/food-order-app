import { useRef } from 'react'
import styles from './FoodForm.module.css'

const FoodForm = (props) => {
    const amountInputRef = useRef();

    const formSubmitHandler = (event)=> {
        event.preventDefault();

        const amount = amountInputRef.current.value;
        props.getAmount(amount);
    }

    return (
        <form className={styles['food-form']} onSubmit={formSubmitHandler}>
            <div className={styles.quantity}>
                <label htmlFor="amount">Amount</label>
                <input ref={amountInputRef} type="number" id="amount" min="1" max="5" step="1" defaultValue="1" />
            </div>
            <button type='submit' className={styles.btn}>+ Add</button>
        </form>
    )
}

export default FoodForm;