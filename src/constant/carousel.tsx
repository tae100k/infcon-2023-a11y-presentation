import {
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  CarouselImage6,
  CarouselImage7,
  CarouselImage8,
  CarouselImage9,
  CarouselImage10,
} from "assets/images";
import {CarouselItemType} from "types/carousel";

export const carouselItems: CarouselItemType[] = [
  {
    id: "image-1",
    src: CarouselImage1,
    // alt: "섬세한 장인정신이 느껴지는 가운데, 현대적인 스타일링",
  },
  {
    id: "image-2",
    src: CarouselImage2,
    // alt: "컬러풀하고 다채로운 트위드 셋업 컬렉션 1",
  },
  {
    id: "image-3",
    src: CarouselImage3,
    // alt: "컬러풀하고 다채로운 트위드 셋업 컬렉션 2",
  },
  {
    id: "image-4",
    src: CarouselImage4,
    // alt: "컬러풀하고 다채로운 트위드 셋업이 눈에 띄었던 다카르 공방 컬렉션.",
  },
  {
    id: "image-5",
    src: CarouselImage5,
    // alt: "클래식한 트위드 롱 코트가 무척 인상적이다.",
  },
  {
    id: "image-6",
    src: CarouselImage6,
    // alt: "클래식한 트위드 롱 코트가 무척 인상적이다.",
  },
  {
    id: "image-7",
    src: CarouselImage7,
    // alt: ""
  },
  {
    id: "image-8",
    src: CarouselImage8,
    // alt: ""
  },
  {
    id: "image-9",
    src: CarouselImage9,
    // alt: "볼륨감 넘치는 스커트의 실루엣이 인상적이다.",
  },
  {
    id: "image-10",
    src: CarouselImage10,
    // alt: "섬세한 장인정신이 느껴지는 가운데, 현대적인 스타일링이 돋보였던 룩",
  },
];

export const VISIBLE_CAROUSEL_LENGTH = 5;
