import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import {IconButton} from "@mui/material";
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
      [direction]: {sm: 20},
      transform: "translateY(-50%)",
      top: "50%",
      borderRadius: "50%",
      bgcolor: "#E7E2DF",
      border: "1px solid black",
      color: "initial",
      zIndex: 10,
      padding: "20px",
      "&:hover": {
        backgroundColor: "#E7E2DF",
        borderColor: "black",
      },
      display: {
        xs: "none",
        sm: "flex",
      },
    }}
    {...props}
  >
    {direction === "left" ? (
      <WestIcon sx={{width: 32, height: 32}} />
    ) : (
      <EastIcon sx={{width: 32, height: 32}} />
    )}
  </IconButton>
);
