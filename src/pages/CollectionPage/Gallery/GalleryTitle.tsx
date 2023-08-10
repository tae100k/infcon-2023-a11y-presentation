import {Box, Typography} from "@mui/material";

export const GalleryTitle = () => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#000",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          letterSpacing: 0.54,
          fontSize: {
            xs: "18px",
            sm: "24px",
            md: "36px",
          },
        }}
      >
        From 다카르, To 도쿄
      </Typography>
      <Typography
        sx={{
          color: "var(--black, #000)",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "125%",
          letterSpacing: "0.3px",
          fontSize: {
            xs: "12px",
            sm: "16px",
            md: "20px",
          },
          marginTop: "4px",
        }}
      >
        지난 6월 1일 일본 최대의 국제 전시장 도쿄 빅사이트에서는 샤넬의 다카르
        공방 컬렉션의 레플리카 쇼가 열렸다.
      </Typography>
    </Box>
  );
};
