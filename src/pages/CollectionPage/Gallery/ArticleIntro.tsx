import {Box, Typography} from "@mui/material";
import {ArticleImage1, ArticleImage2} from "assets/images";

export const ArticleIntro = () => {
  return (
    <Box
      border="1px solid red"
      display="flex"
      gap={"32px"}
      sx={{
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          flex: "2",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            flex: "1",
            borderRadius: {
              xs: "0px 24px",
              sm: "0px 36px",
              md: "0px 48px",
            },
            border: "1px solid var(--black, #000)",
            position: "relative",
            overflow: "hidden",
            paddingBottom: {
              xs: "50%",
              sm: "40%",
              md: "25%",
            },
          }}
        >
          <img
            src={ArticleImage1}
            alt="Article  1"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              position: "absolute",
              left: "0",
              top: "0",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flex: "1",
          borderRadius: {
            xs: "24px 0px",
            sm: "36px 0px",
            md: "48px 0px",
          },
          border: "1px solid var(--black, #000)",
          position: "relative",
          overflow: "hidden",
          paddingBottom: {
            xs: "50%",
            sm: "40%",
            md: "25%",
          },
        }}
      >
        <img
          src={ArticleImage2}
          alt="Article2"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0",
          }}
        />
      </Box>
    </Box>
  );
};
