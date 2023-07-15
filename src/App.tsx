import "./App.css";
import {Carousel} from "./shared/Carousel/Carousel";
import {Copyright} from "./MainPage/Copyright/Copyright";
import {Header} from "./MainPage/Header/Header";
import {Cards} from "shared/Cards/Cards";

function App() {
  return (
    <div className="layout">
      <Header />
      <Carousel />
      <Cards />
      <Copyright />
    </div>
  );
}

export default App;
