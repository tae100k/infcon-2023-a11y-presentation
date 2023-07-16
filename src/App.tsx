import "./App.css";
import {Carousel} from "./shared/Carousel/Carousel";
import {Header} from "./MainPage/Header/Header";
import {Cards} from "shared/Cards/Cards";
import {Copyright} from "shared/Copyright/Copyright";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/system";
import {Container} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      {/* <Carousel /> */}
      {/* <Cards /> */}
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
