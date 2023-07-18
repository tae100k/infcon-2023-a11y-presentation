import {Box, Typography} from "@mui/material";

const Carousels = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "32px 16px",
          sm: "64px 32px",
          md: "96px 48px",
          lg: "120px 64px",
        },
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "64px",
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "36px",
            },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            letterSpacing: "0.54px",
            textAlign: "center",
            whiteSpace: {xs: "pre-line", md: "initial"},
          }}
        >
          {"CHANEL 2022/23\n공방(Métiers d’art)컬렉션 미리보기"}
        </Typography>
        <Typography
          sx={{
            color: "#8B8885",
            textAlign: "center",
            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "16px",
            },
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "150%",
            letterSpacing: "0.24px",
            whiteSpace: {xs: "initial", sm: "pre-line", lg: "initial"},
          }}
        >
          {
            "모델 리앤 반 롬페이와 아마르 아콰이(Amar Akway)가 CHANEL 2022/23d\n공방(Métiers d’art) 컬렉션의 세련된 착장을 한 몸처럼 자연스럽게 선보입니다."
          }
        </Typography>
      </Box>
    </Box>
  );
};

export {Carousels};
