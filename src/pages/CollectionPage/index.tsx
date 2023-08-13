import {Box} from "@mui/material";
import {Cards} from "shared/Cards/Cards";
import {Copyright} from "shared/Copyright/Copyright";
import {Header} from "./Header/Header";
import {Gallery} from "./Gallery/Gallery";
import {Navbar} from "shared/Navbar/Navbar";

const CollectionPage = () => {
  return (
    <Box bgcolor={"#e7e2df"} pb={"64px"} height={"100%"}>
      <Navbar />
      <Header />
      <Gallery />
      <Cards />
      <Copyright />
    </Box>
  );
};

export default CollectionPage;
