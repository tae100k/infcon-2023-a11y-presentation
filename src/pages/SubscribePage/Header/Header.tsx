import {Box, Button, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

const Header = () => {
  return (
    // <header>
    <Box
      sx={{
        display: "flex",
        padding: "88px 32px 56px 32px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        borderTop: "2px solid var(--black, #000)",
        borderBottom: "2px solid var(--black, #000)",
      }}
    >
      <Typography
        // variant="h1"
        sx={{
          color: "#000",
          fontStyle: "normal",
          fontSize: {
            xs: "80px",
            sm: "96px",
            lg: "164px",
          },
          fontWeight: 700,
          lineHeight: "normal",
          letterSpacing: "2.46px",
          textAlign: "center",
        }}
      >
        SUBSCRIBE
      </Typography>
    </Box>
    // </header>
  );
};
export {Header};
