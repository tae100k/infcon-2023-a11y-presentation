import {Box} from "@mui/material";
import {Carousels} from "pages/MainPage/Carousel/Carousel";
import {Cards} from "shared/Cards/Cards";
import {Copyright} from "shared/Copyright/Copyright";
import {Navbar} from "shared/Navbar/Navbar";
import {Header} from "./Header/Header";

const MainPage = () => {
  return (
    <Box bgcolor={"#e7e2df"} pb={"64px"} height={"100%"}>
      <Navbar />
      <Header />
      <Carousels />
      <Cards />
      <Copyright />
    </Box>
  );
};

export default MainPage;
