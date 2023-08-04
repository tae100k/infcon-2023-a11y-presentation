import {Button} from "@mui/material";

interface SubscribeSubmitButtonProps {
  onClick?: () => void;
}

export const SubscribeSubmitButton: React.FC<SubscribeSubmitButtonProps> = ({
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
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
          background: "#000",
          borderColor: "#000",
          opacity: 0.8,
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
