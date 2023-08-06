import {IconButton} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
  ...props
}) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      [direction]: {sm: 20, md: 120},
      transform: "translateY(-50%)",
      top: "50%",
      borderRadius: "50%",
      bgcolor: "black",
      border: "2px solid white",
      color: "white",
      zIndex: 10,
      "&:hover": {
        backgroundColor: "black",
        borderColor: "white",
      },
      display: {
        xs: "none",
        sm: "flex",
      },
    }}
    {...props}
  >
    {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
  </IconButton>
);
