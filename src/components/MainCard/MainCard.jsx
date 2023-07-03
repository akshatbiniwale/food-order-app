import styles from './MainCard.module.css'
import Card from '../UI/Card';
import FoodItem from '../FoodItem/FoodItem';

const MainCard = (props)=> {
    

    const foodDetailsList = (data)=> {
        

        props.getAll(data);
    }

    return(
        <section className={styles.main}>
            <Card>
                {props.meals.map((meal)=> {
                    return (
                        <FoodItem
                            key={meal.id}
                            id={meal.id}
                            name={meal.name}
                            desc={meal.description}
                            price={meal.price}
                            getData={foodDetailsList}
                        />
                    );
                })}
            </Card>
        </section>
    );
}

export default MainCard;