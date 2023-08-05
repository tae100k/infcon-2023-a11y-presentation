import {Box} from "@mui/material";
import ContentsImage from "./ContentsImage/ContentsImage";
import {SubscribeForm} from "./SubscribeForm/SubscribeForm";

const Forms = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "32px 40px 32px 40px",
          md: "32px 148px 32px 148px",
          lg: "32px 74px 32px 0px",
        },
      }}
    >
      <Box
        display="flex"
        gap={{
          xs: "40px",
          md: "48px",
          lg: "120px",
        }}
        sx={{
          flexDirection: {xs: "column", lg: "row"},
          width: "100%",
        }}
      >
        <ContentsImage />
        <SubscribeForm />
      </Box>
    </Box>
  );
};
export {Forms};
