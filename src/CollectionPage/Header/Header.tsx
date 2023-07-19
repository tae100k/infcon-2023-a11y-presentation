import {Box, Typography} from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "163px 48px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography
        variant="h1"
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
        variant="h2"
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
  );
};
export {Header};
