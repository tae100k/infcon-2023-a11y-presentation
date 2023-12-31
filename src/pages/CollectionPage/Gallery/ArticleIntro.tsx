import {Box} from "@mui/material";
import {ArticleImage1, ArticleImage2} from "assets/images";

export const ArticleIntro = () => {
  return (
    <Box
      display="flex"
      gap={"32px"}
      sx={{
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          flex: {xs: "none", sm: "none", md: "2"},
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            borderRadius: {
              xs: "0px 24px 24px 0px",
              md: "0px 24px",
            },
            height: "100%",
            border: "1px solid var(--black, #000)",
            position: "relative",
            overflow: "hidden",
            paddingTop: {
              xs: "100%",
              md: "296px",
            },
          }}
        >
          <img
            src={ArticleImage1}
            alt="줄지어 워킹하는 모델들"
            tabIndex={0}
            style={{
              objectFit: "cover",
              objectPosition: "top",
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
          height: "100%",
          flex: {xs: "none", sm: "none", md: "1"},
          borderRadius: {
            xs: "24px 0px 0px 24px",
            md: "24px 0px",
          },
          border: "1px solid var(--black, #000)",
          position: "relative",
          overflow: "hidden",
          paddingTop: {
            xs: "100%",
            md: "296px",
          },
        }}
      >
        <img
          src={ArticleImage2}
          alt="오른쪽 이미지"
          tabIndex={0}
          style={{
            objectFit: "cover",
            objectPosition: "top",
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
