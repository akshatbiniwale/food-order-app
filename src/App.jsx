import { Fragment, useState } from "react";
import { createPortal } from "react-dom";

import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import MainCard from "./components/MainCard/MainCard";
import MainModal from "./components/MainModal/MainModal";
import NavigationBar from "./components/NavBar/NavigationBar";
import CartModal from './components/CartModal/CartModal';

const App = () => {
  const [addedMeals, setAddedMeals] = useState([]);
  const [cartModal, setCartModal] = useState(false);
  const [count_price, setCount_Price] = useState({
    count : 0,
    price: 0
  });
  let modal = null;

  const available_meals = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.55
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99
    }
  ]

  const allFoodDetails = (data)=> {
    setCount_Price((prevCount_Price) => {
      return {
        count: prevCount_Price.count+data.amount,
        price: prevCount_Price.price+data.price
      };
    })
    setAddedMeals((prevMeals) => {
      const found = prevMeals.find((obj)=> obj.id === data.id)
      console.log(found);
      if(found){
        found.amount += data.amount;
        return ([...prevMeals]);
      }else{
        return ([...prevMeals, data]);
      }
    })
  }

  const showModalHandler = ()=> {
    setCartModal(true);
  }

  const closeModalHandler = ()=> {
    setCartModal(false);
  }

  if(cartModal){
    modal = (createPortal(
      <CartModal closeModal={closeModalHandler} mealsAdded={addedMeals} totalCost={count_price.price}/>,
      document.getElementById("overlays")
    ));
  }

  return (
    <Fragment>
      <NavigationBar showModal={showModalHandler} count={count_price.count} />
      <BackgroundImg />
      <main>
        <MainModal />
        <MainCard meals={available_meals} getAll={allFoodDetails} />
      </main>
      {modal}
    </Fragment>
  );
}

export default App;