import { Box, Typography } from "@mui/material";
import { ImageLists } from "./ImageList";
import { ArticleIntro } from "./ArticleIntro";

export const GalleryArticle = () => {
  return (
    <Box display="flex" gap={"32px"} flexDirection={"column"}>
      <ArticleIntro />
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
        }}
      >
        이번 다카르 공방 컬렉션은 몸에 피트되는 롱코트, 타이트한 플레어 팬츠,
        70년대 컬러들, 플랫폼 슈즈, 자수 장식을 넣은 컬러풀한 오버사이즈
        스웨트셔츠, 멀티컬러 트위드, 뒤보다 앞이 짧은 드레스 등이 대거
        등장하는데, 중요한 건 여기에 버지니 비아르에게 영감의 원천이 된 1970년대
        정신이 컬렉션 전체를 관통한다는 것이다. 이는 에너지의 폭발로 상징되는
        70년대의 팝, 소울, 펑크, 디스코, 훵크(punk) 등을 즐기는 환희에 넘친
        여성의 모습으로 표출된다. 버지니 비아르에게 1970년대란 고동치는 모든
        것들의 만남과 대화로 탄생한 예술적인 모험과 고유한 개성으로 삶이 더없이
        풍부했던 때다. “오랫동안 주고받은 진정한 대화, 내 작품에 동기를 부여하고
        내가 다시 기록하고자 하는 게 바로 이런 인간적이고 따뜻한 측면이다.
        여기에 내 모든 영혼을 쏟아부었다. 이번 컬렉션처럼 예술적인 모험이
        탄생하는 놀라운 만남이 나의 원동력이다.” 공방 장인들의 섬세한 손길을
        느낄 수 있는 옷들이 지나가자 마음에 묘한 잔상이 남는다.
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
        }}
      >
        안무가 디미트리 샹블라(Dimitri Chamblas)가 다카르에서 공개된 퍼포먼스를
        새롭게 해석하고 도쿄 타마 미술대학의 무용수들과 함께 선보인 ‘슬로
        쇼(Slow Show)’가 그것. 쇼장 앞의 무용수들은 마치 시공간이 정지된 곳에
        있는 것처럼 육안으로 느끼기 힘들 만큼 천천히 느리게 움직였다. 마치
        그들에게만 슬로 모션 주문을 걸어놓은 듯 아주 느리게 고요히. 흥미로운
        퍼포먼스를 지나자 미니멀한 베이지와 블랙의 쇼장이 모습을 드러냈다.
        피아노 한 대가 놓인 정제된 공간. 그 모습만으로도 어떤 일이 벌어질지
        상상력을 불러일으키기에 충분했다. 드디어 시작!
      </Typography>
      <ImageLists />
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
};
