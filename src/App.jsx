import { Fragment } from "react";
import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
import MainCard from "./components/MainCard/MainCard";
import MainModal from "./components/MainModal/MainModal";
import NavigationBar from "./components/NavBar/NavigationBar";

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <BackgroundImg />
      <main>
        <MainModal />
        <MainCard />
      </main>
    </Fragment>
  );
}

export default App;