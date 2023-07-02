import styles from './MainCard.module.css'
import Card from '../UI/Card';
import FoodItem from '../FoodItem/FoodItem';

const MainCard = ()=> {
    return(
        <section className={styles.main}>
            <Card>
                <FoodItem />
            </Card>
        </section>
    );
}

export default MainCard;