import {ThemeProvider} from "@emotion/react";
import {purple} from "@mui/material/colors";
import {createTheme} from "@mui/system";
import {Cards} from "shared/Cards/Cards";
import {Copyright} from "shared/Copyright/Copyright";
import "./App.css";

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
      <Cards />
      <Copyright />
    </ThemeProvider>
  );
}

export default App;
