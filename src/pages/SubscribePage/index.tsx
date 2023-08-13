import {Box} from "@mui/material";
import {Copyright} from "shared/Copyright/Copyright";
import {Navbar} from "shared/Navbar/Navbar";
import {Forms} from "./Contents/SubscribeContents";
import {Header} from "./Header/Header";

const SubscribePage = () => {
  return (
    <Box bgcolor={"#e7e2df"} pb={"64px"} height={"100%"}>
      <Navbar />
      <Header />
      <Forms />
      <Copyright />
    </Box>
  );
};

export default SubscribePage;
