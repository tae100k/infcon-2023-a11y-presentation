import {Box, Typography} from "@mui/material";

export const ArticleIntro = () => {
  return (
    <Box
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
        <Typography
          sx={{
            color: "var(--black, #000)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
            letterSpacing: "0.24px",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "16px",
            },
          }}
        >
          카르의 구 법원(Palais de Justice)에서 공개된 샤넬 2022/23 공방
          컬렉션이 도쿄에 착륙해 다시 열린 것이다. 일본에서 공개된 이번 쇼는
          창작적 교류라는 쇼 주제에 걸맞게 입구에서부터 독특한 퍼포먼스가
          펼쳐졌다.
        </Typography>
        <Box
          sx={{
            flex: "1",
            borderRadius: {
              xs: "0px 24px",
              sm: "0px 36px",
              md: "0px 48px",
            },
            border: "1px solid var(--black, #000)",
            background: `url(<path-to-image>), lightgray 50% / cover no-repeat`,
            paddingBottom: {
              xs: "50%",
              sm: "40%",
              md: "25%",
            },
            position: "relative",
            height: "full",
          }}
        />
        <Typography
          sx={{
            color: "#7B7B7B",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // 18px
            letterSpacing: "0.18px",
            fontSize: {
              xs: "10px",
              sm: "11px",
              md: "12px",
            },
          }}
        >
          1970년대의 에너지와 영감을 느낄 수 있었던 샤넬의 다카르 공방 컬렉션.
          까멜리아, 엮은 진주, 주얼 장식 버튼, 비즈와 자수 등 공방 장인들의
          섬세한 솜씨는 다채로운 컬러와 하우스의 상징적 코드들과 버무려졌다.
        </Typography>
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
          background: `url(<path-to-image>), lightgray 50% / cover no-repeat`,
          paddingBottom: {
            xs: "50%",
            sm: "40%",
            md: "25%",
          },
          position: "relative",
        }}
      />
    </Box>
  );
};
