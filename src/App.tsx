import {Box} from "@mui/material";
import {Cards} from "shared/Cards/Cards";
import {Copyright} from "shared/Copyright/Copyright";
import "./App.css";

function App() {
  return (
    <Box bgcolor={"#e7e2df"} pt={"32px"} pb={"64px"} height={"100%"}>
      {/* <Header /> */}
      {/* <Carousel /> */}
      <Cards />
      <Copyright />
    </Box>
  );
}

export default App;
