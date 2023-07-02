import styles from './MainCard.module.css'
import Card from '../UI/Card';
import FoodItem from '../FoodItem/FoodItem';

const MainCard = (props)=> {
    return(
        <section className={styles.main}>
            <Card>
                {props.meals.map((meal)=> {
                    return (
                        <FoodItem
                            name={meal.name}
                            desc={meal.description}
                            price={meal.price}
                        />
                    );
                })}
            </Card>
        </section>
    );
}

export default MainCard;