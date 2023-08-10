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
              sm: "0px 36px 36px 0px",
              md: "0px 48px",
            },
            height: "100%",
            border: "1px solid var(--black, #000)",
            position: "relative",
            overflow: "hidden",
            paddingTop: {
              xs: "50%",
              sm: "40%",
              md: "calc(546px * 2 / 3)",
            },
          }}
        >
          <img
            src={ArticleImage1}
            alt="까멜리아, 엮은 진주, 주얼 장식 버튼, 비즈와 자수 등 공방 장인들의 섬세한 솜씨는 다채로운 컬러와 하우스의 상징적 코드들과 버무려졌다."
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
            sm: "36px 0px 0px 36px",
            md: "48px 0px",
          },
          border: "1px solid var(--black, #000)",
          position: "relative",
          overflow: "hidden",
          paddingTop: {
            xs: "100%",
            md: "546px",
          },
        }}
      >
        <img
          src={ArticleImage2}
          alt="섬세한 장인정신이 느껴지는 가운데, 현대적인 스타일링이 돋보였던 룩"
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
