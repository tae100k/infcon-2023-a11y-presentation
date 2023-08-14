import React from "react";
import {Button} from "@mui/material";

interface SubscribeSubmitButtonProps {}

export const SubscribeSubmitButton: React.FC<
  SubscribeSubmitButtonProps
> = () => {
  return (
    <Button
      type="submit"
      sx={{
        display: "flex",
        width: "full",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        border: "2px solid var(--black, #000)",
        background: "var(--background,  #000)",
        color: "white",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "125%",
        textAlign: "center",
        transition: "background 0.3s, border-color 0.3s, color 0.3s",
        // "&:hover": {
        //   color: "var(--black, #000)",
        // },
        "&:hover": {
          border: "2px solid var(--black, #000)",
          background: "var(--background,  #000)",
        },
      }}
    >
      구독 신청
    </Button>
  );
};
