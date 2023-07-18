import {Box, Button, Typography} from "@mui/material";

const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="88px 32px 56px 32px"
      sx={{
        borderTop: "2px solid black",
        borderBottom: "2px solid black",
        gap: "16px",
      }}
    >
      <Typography
        variant="h1"
        align="center"
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
        TREND 2023
      </Typography>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          padding: "16px 18px",
          borderRadius: "9999px",
          border: "1px solid var(--white, #FFF)",
          background: "var(--black, #000)",
          color: "var(--white, #FFF)",
          textAlign: "center",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 700,
          alignSelf: "center",
          width: "initial",
        }}
      >
        정기 구독 신청
      </Button>
    </Box>
  );
};
export {Header};
