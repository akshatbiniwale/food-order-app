import { Fragment, useEffect, useState } from "react";

import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import MainCard from "./components/MainCard/MainCard";
import MainModal from "./components/MainModal/MainModal";
import NavigationBar from "./components/NavBar/NavigationBar";
import CartModal from './components/CartModal/CartModal';

const App = () => {
  const [addedMeals, setAddedMeals] = useState([]);
  const [cartModal, setCartModal] = useState(false);
  const [bump, setBump] = useState(false);
  const [count_price, setCount_Price] = useState({
    count : 0,
    price: 0
  });
  let modal = null;

  useEffect(()=> {
    let num = 0, cost = 0;
    for(var i=0; i<addedMeals.length; i++){
      num += addedMeals[i].amount;
      cost += num*addedMeals[i].price;
    }
    setCount_Price({
      count: num,
      price: cost
    });
    setTimeout(() => {
      setBump(false);
    }, 300);

    return (()=> {
      setBump(true);
    });
  }, [addedMeals])

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
    setAddedMeals((prevMeals) => {
      const found = prevMeals.find((obj)=> obj.id === data.id)
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

  const deleteMeal = (id)=> {
    for(var i=0; i<addedMeals.length; i++){
      if(addedMeals[i].id === id){
        addedMeals.splice(i,1);
      }
    }
  }

  const valHandler = (id, val, price)=> {
    setAddedMeals((prevMeals) => {
      const found = prevMeals.find((obj)=> obj.id === id);
      found.amount+= val;
      if(found.amount === 0){
        deleteMeal(id);
      }
      return ([...prevMeals]);
    })
  }

  const clearHandler = ()=> {
    setAddedMeals([]);
  }

  if (cartModal) {
    modal = (<CartModal
      closeModal={closeModalHandler}
      mealsAdded={addedMeals}
      totalCost={count_price.price}
      changeFn={valHandler}
      clearCart={clearHandler}
    />);
  }

  return (
    <Fragment>
      <NavigationBar showModal={showModalHandler} count={count_price.count} trigger={bump} />
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