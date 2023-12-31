import {Box, Typography} from "@mui/material";
import {WalkingModelsImage} from "assets/images";

const Header = () => {
  return (
    // <header>
    <Box
      // role="banner"
      sx={{
        display: "flex",
        padding: "163px 48px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        position: "relative",
      }}
    >
      <img
        src={WalkingModelsImage}
        alt="Image 1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          // variant="h1"
          sx={{
            color: "white",
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
          Métiers d’art
        </Typography>
        <Typography
          // variant="h2"
          sx={{
            color: "white",
            fontStyle: "normal",
            fontSize: {
              xs: "56px",
              sm: "60px",
              lg: "80px",
            },
            fontWeight: 700,
            lineHeight: "normal",
            letterSpacing: "2.46px",
            textAlign: "center",
          }}
        >
          Collection
        </Typography>
      </Box>
    </Box>
    // </header>
  );
};
export {Header};
