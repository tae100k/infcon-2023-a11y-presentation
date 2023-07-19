import {Box} from "@mui/material";
import {SubscribeForm} from "./SubscribeForm";
import SubscribeImage from "./SubscribeImage";

const Forms = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "32px 40px 32px 0px",
          md: "32px 74px 32px 0px",
          lg: "32px 148px 32px 0px",
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
        <SubscribeImage />
        <SubscribeForm />
      </Box>
    </Box>
  );
};
export {Forms};
