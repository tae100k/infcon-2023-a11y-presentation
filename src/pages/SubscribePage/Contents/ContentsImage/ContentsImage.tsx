import {Box} from "@mui/material";
import {HaleyLawrenceImage} from "assets/images";

export const ContentsImage = () => {
  return (
    <Box
      component="img"
      src={HaleyLawrenceImage}
      alt={"흰 표면에 누워있는 여성 세 명"}
      loading="lazy"
      sx={{
        width: "100%",
        maxWidth: {lg: "669px"},
        borderRadius: {
          xs: "16px",
          sm: "24px",
          md: "32px",
          lg: "0px 48px 48px 0px",
        },
        border: "2px solid black",
      }}
    />
  );
};
