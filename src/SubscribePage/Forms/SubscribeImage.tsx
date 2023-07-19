import {Box} from "@mui/material";

const SubscribeImage = () => {
  return (
    <Box
      component="img"
      src="images/three-people.jpg"
      alt={"three people"}
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

export default SubscribeImage;
