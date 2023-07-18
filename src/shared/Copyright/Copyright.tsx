import {Box, Typography} from "@mui/material";
import "./Copyright.css";

const Copyright = () => {
  return (
    <Box
      borderTop={"2px solid black"}
      borderBottom={"2px solid black"}
      py={"32px"}
      display="flex"
      justifyContent="center"
    >
      <Typography
        component="h2"
        textAlign={"center"}
        fontSize={"16px"}
        fontStyle="normal"
        fontWeight={900}
        lineHeight={"normal"}
        textTransform={"uppercase"}
        sx={{
          "@media (max-width:600px)": {
            fontSize: "14px",
          },
        }}
      >
        GINA LEE & TAEHEE KIM ©2023 a good design is inclusive and works for
        everyone in every situation
      </Typography>
    </Box>
  );
};

export {Copyright};
