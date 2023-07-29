import {Button} from "@mui/material";

export const SubscribeSubmitButton = () => {
  return (
    <Button
      sx={{
        display: "flex",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        border: "1px solid #000",
        background: "#000",
        color: "white",
        "&:hover": {
          background: "#000", // Maintain the background color when hovering
          borderColor: "#000", // Maintain the border color when hovering
          opacity: 0.8, // Optional: you can add a slight change in the opacity if you want
        },
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "125%",
        }}
      >
        구독 신청
      </span>
    </Button>
  );
};
