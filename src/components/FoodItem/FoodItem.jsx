import FoodForm from '../FoodForm/FoodForm';
import styles from './FoodItem.module.css'

const FoodItem = (props)=> {
    return(
        <li className={styles['food-item']}>
            <div>
                <h3 className={styles['food-name']}>{props.name}</h3>
                <div className={styles['food-desc']}>{props.desc}</div>
                <div className={styles['food-cost']}>${props.price}</div>
            </div>
            <div>
                <FoodForm />
            </div>
        </li>
    );
}

export default FoodItem;