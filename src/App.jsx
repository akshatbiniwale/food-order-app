import { Fragment } from "react";
import { createPortal } from "react-dom";

import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import MainCard from "./components/MainCard/MainCard";
import MainModal from "./components/MainModal/MainModal";
import NavigationBar from "./components/NavBar/NavigationBar";
import CartModal from './components/CartModal/CartModal';

const App = () => {
  const available_meals = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99
    },
    {
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.55
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99
    },
    {
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99
    }
  ]

  return (
    <Fragment>
      <NavigationBar />
      <BackgroundImg />
      <main>
        <MainModal />
        <MainCard meals={available_meals} />
      </main>
      {createPortal(
        <CartModal />,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
}

export default App;