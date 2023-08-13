import {Cards} from "shared/Cards/Cards";
import {Layout} from "shared/Layout/Layout";
import {Gallery} from "./Gallery/Gallery";
import {Header} from "./Header/Header";

const CollectionPage = () => {
  return (
    <Layout>
      <Header />
      <Gallery />
      <Cards />
    </Layout>
  );
};

export default CollectionPage;
