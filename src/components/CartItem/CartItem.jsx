import styles from './CartItem.module.css'

const CartItem = (props)=> {
    const inc = ()=> {
        props.change(props.id, 1, props.price);
    }

    const dec = ()=> {
        props.change(props.id, -1, props.price);
    }

    return (
        <li className={styles.box}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.info}>
                    <span className={styles.price}>${props.price}</span>
                    <span className={styles.quantity}>x {props.amount}</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.control} onClick={dec}>−</button>
                <button className={styles.control} onClick={inc}>+</button>
            </div>
        </li>
    );
}

export default CartItem;