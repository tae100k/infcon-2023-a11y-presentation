import {Box, Typography} from "@mui/material";
import "./Copyright.css";

const Copyright = () => {
  return (
    <footer>
      <Box
        borderTop={"2px solid black"}
        borderBottom={"2px solid black"}
        py={"32px"}
        display="flex"
        justifyContent="center"
        aria-label="홈페이지 저작권 정보"
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
    </footer>
  );
};

export {Copyright};
