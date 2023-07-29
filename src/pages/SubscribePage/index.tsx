import {Box} from "@mui/material";
import {Copyright} from "shared/Copyright/Copyright";
import {Forms} from "./Contents/SubscribeContents";
import {Header} from "./Header/Header";

const SubscribePage = () => {
  return (
    <Box bgcolor={"#e7e2df"} pt={"32px"} pb={"64px"} height={"100%"}>
      <Header />
      <Forms />
      <Copyright />
    </Box>
  );
};

export default SubscribePage;
