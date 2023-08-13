import {Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate("/");
  };

  return (
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "16px",
        alignSelf: "stretch",
        padding: "24px 32px",
        cursor: "pointer",
      }}
      onClick={handleNavClick}
    >
      <Typography
        sx={{
          color: "#000",
          textAlign: "center",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          letterSpacing: "0.36px",
        }}
      >
        TREND 2023
      </Typography>
    </Box>
  );
};
