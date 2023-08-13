import {Carousels} from "pages/MainPage/Carousel/Carousel";
import {Cards} from "shared/Cards/Cards";
import {Layout} from "shared/Layout/Layout";
import {Header} from "./Header/Header";

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Carousels />
      <Cards />
    </Layout>
  );
};

export default MainPage;
