import {Box} from "@mui/material";

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
        alignItems: "flex-start",
        gap: "120px",
        flexWrap: "wrap",
      }}
    >
      <Box
        display="flex"
        gap={"120px"}
        sx={{
          flexDirection: {xs: "column", md: "row"},
          width: "100%",
        }}
      >
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
        <Box
          sx={{
            padding: "32px 0px",
          }}
        >
          form
        </Box>
      </Box>
    </Box>
  );
};
export {Forms};
