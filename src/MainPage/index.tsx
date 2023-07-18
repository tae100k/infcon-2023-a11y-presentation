import {Box} from "@mui/material";
import {Carousels} from "MainPage/Carousels/Carousels";
import {Cards} from "shared/Cards/Cards";
import {Copyright} from "shared/Copyright/Copyright";
import {Header} from "./Header/Header";

const MainPage = () => {
  return (
    <Box bgcolor={"#e7e2df"} pt={"32px"} pb={"64px"} height={"100%"}>
      <Header />
      <Carousels />
      <Cards />
      <Copyright />
    </Box>
  );
};

export default MainPage;
