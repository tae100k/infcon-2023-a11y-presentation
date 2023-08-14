import {Box, Typography} from "@mui/material";
import {PenIcon} from "assets/icons/icon";

export const IntroductionText = () => (
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
    지난해 12월 세네갈 다카르의 구 법원(Palais de Justice)에서 공개된 샤넬
    2022/23 공방 컬렉션이 도쿄에 착륙해 다시 열린 것이다. 일본에서 공개된 이번
    쇼는 창작적 교류라는 쇼 주제에 걸맞게 입구에서부터 독특한 퍼포먼스가
    펼쳐졌다.
  </Typography>
);

export const BodyText = () => (
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
    이번 다카르 공방 컬렉션은 다양한 스타일이 대거 등장하는데, 중요한 건 여기에
    버지니 비아르에게 영감의 원천이 된 1970년대 정신이 컬렉션 전체를 관통한다는
    것이다. 버지니 비아르에게 1970년대란 고동치는 모든 것들의 만남과 대화로
    탄생한 예술적인 모험과 고유한 개성으로 삶이 더없이 풍부했던 때다. “오랫동안
    주고받은 진정한 대화, 내 작품에 동기를 부여하고 내가 다시 기록하고자 하는 게
    바로 이런 인간적이고 따뜻한 측면이다. 여기에 내 모든 영혼을 쏟아부었다. 이번
    컬렉션처럼 예술적인 모험이 탄생하는 놀라운 만남이 나의 원동력이다.” 공방
    장인들의 섬세한 손길을 느낄 수 있는 옷들이 지나가자 마음에 묘한 잔상이
    남는다.
  </Typography>
);

export const FooterText = () => (
  <Box display="flex" alignItems={"center"}>
    <PenIcon
      sx={{
        width: 20,
        height: 20,
        marginRight: 0.5,
      }}
      tabIndex={0}
      aria-hidden="true"
    />
    <Typography
      sx={{
        color: "#626262",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "125%",
        letterSpacing: "0.21px",
        fontSize: {
          xs: "10px",
          sm: "12px",
          md: "14px",
        },
      }}
    >
      에디터 김신
    </Typography>
  </Box>
);
