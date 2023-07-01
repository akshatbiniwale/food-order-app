import BackgroundImg from "./components/BackgroundImg/BackgoundImg";
import MainModal from "./components/MainModal/MainModal";
import NavigationBar from "./components/NavBar/NavigationBar";

const App = ()=> {
  return (
    <div>
      <NavigationBar />
      <BackgroundImg />
      <MainModal />
    </div>
  );
}

export default App;