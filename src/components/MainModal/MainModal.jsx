import styles from './MainModal.module.css'

const MainModal = () => {
    return (
        <section className={styles.section}>
            <div className={styles['content-box']}>
                <h1>Delicious Food, Delivered To You</h1>
                <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </div>
        </section>
    );
}

export default MainModal;