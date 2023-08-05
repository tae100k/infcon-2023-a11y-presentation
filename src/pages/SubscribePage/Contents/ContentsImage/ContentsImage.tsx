import {Box} from "@mui/material";

export const ContentsImage = () => {
  const imagePath = "images/three-people.jpg";

  return (
    <Box
      component="img"
      src={imagePath}
      alt={"흰 표면에 누워있는 여성 세 명"}
      loading="lazy"
      sx={{
        border: "1px solid black",
        borderRadius: "0px 48px 48px 0px",
        display: "flex",
        width: "100%",
        maxWidth: {md: "669px"},
      }}
    />
  );
};
