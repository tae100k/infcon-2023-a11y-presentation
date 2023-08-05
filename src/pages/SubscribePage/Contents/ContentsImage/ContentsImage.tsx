import {Box} from "@mui/material";

const ContentsImage = () => {
  return (
    <Box
      component="img"
      src="images/three-people.jpg"
      alt={"흰 표면에 누워있는 여성 세 명"}
      loading="lazy"
      sx={{
        border: "1px solid black",
        borderRadius: "0px 48px 48px 0px",
        display: "flex",
        width: "100%",
        maxWidth: {lg: "669px"},
      }}
    />
  );
};

export default ContentsImage;
