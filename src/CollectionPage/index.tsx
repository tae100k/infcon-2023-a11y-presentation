import { Box } from "@mui/material";
import { Cards } from "shared/Cards/Cards";
import { Copyright } from "shared/Copyright/Copyright";
import { Header } from "./Header/Header";
import { Gallery } from "./Gallery/Gallery";

const CollectionPage = () => {
  return (
    <Box bgcolor={"#e7e2df"} pt={"32px"} pb={"64px"} height={"100%"}>
      <Header />
      <Gallery />
      <Cards />
      <Copyright />
    </Box>
  );
};

export default CollectionPage;
