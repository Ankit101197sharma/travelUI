import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Activity from "./Components/Activity/Activity";
import Footer from "./Components/Footer/Footer";
import ImgContainer from "./Components/ImgContainer/ImgContainer";
import Jorney from './Components/Jorney/Jorney';
import LandingPage from './Components/LandingPage/LandingPage';
import TourDiscount from "./Components/TourDisCount/TourDiscount";

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Jorney/>
      <Activity/>
      <TourDiscount/>
      <ImgContainer/>
      <Footer/>
    </div>
  );
}

export default App;
