import { Fragment } from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './CartModal.module.css'
import { createPortal } from 'react-dom';

const Backdrop = (props)=> {
    return(<div className={styles.background} onClick={props.onConfirm}></div>);
}

const ModalOverlay = (props)=> {
    let order = null;

    const changeHandler = (id, val, price)=> {
        props.changeFn(id, val, price);
    }

    const orderHandler = ()=> {
        console.log("Ordering...");
        props.clearCart();
    }

    if(props.mealsAdded.length){
        order = <button className={styles.order} onClick={orderHandler}>Order</button>
    }
    
    return(
        <div className={styles['cart-box']}>
            <div>
                <ul className={styles['item-list']}>
                    {props.mealsAdded.map((meal) => {
                        return (
                            <CartItem
                                id={meal.id}
                                key={meal.id}
                                name={meal.name}
                                price={meal.price}
                                amount={meal.amount}
                                change={changeHandler}
                            />
                        );
                    })}
                </ul>
                <div className={styles['total-box']}>
                    <span>Total Amount</span>
                    <span>${props.totalCost.toFixed(2)}</span>
                </div>
                <div className={styles['close-btn']}>
                    <button className={styles.btn} onClick={props.closeModal}>Close</button>
                    {order}
                </div>
            </div>
        </div>
    );
}

const CartModal = (props) => {
    return (
        <Fragment>
            {createPortal(
                <Backdrop onConfirm={props.closeModal} />, 
                document.getElementById("backdrop-root")
            )}
            {createPortal(
                <ModalOverlay {...props} />, 
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
}

export default CartModal;