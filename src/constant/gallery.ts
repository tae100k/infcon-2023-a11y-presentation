import {
  CollectionImage1,
  CollectionImage2,
  CollectionImage3,
  CollectionImage4,
  CollectionImage5,
  CollectionImage6,
} from "assets/images";
import {galleryGridImageType} from "types/gallery";

export const galleryGridImages: galleryGridImageType[] = [
  {
    img: CollectionImage1,
    // alt: "볼륨감 넘치는 스커트의 실루엣",
    rows: 5,
    cols: 8,
    borderRadius: "48px 0px",
  },
  {
    img: CollectionImage2,
    // alt: "눈에 띄었던 컬러풀하고 다채로운 트위드 셋업",
    rows: 3,
    cols: 10,
    borderRadius: "0px 48px",
  },
  {
    img: CollectionImage3,
    // alt: "섬세한 장인정신이 느껴지는 현대적인 스타일링",
    rows: 3,
    cols: 7,
    borderRadius: "0px 48px",
  },
  {
    img: CollectionImage5,
    // alt: "볼륨감 넘치는 스커트의 실루엣",
    rows: 4,
    cols: 6,
    borderRadius: "48px 0px",
  },
  {
    img: CollectionImage6,
    // alt: "클래식한 트위드 롱코트",
    rows: 4,
    cols: 11,
    borderRadius: "48px 0px",
  },
  {
    img: CollectionImage4,
    // alt: "다채로운 방식의 자수 장식 이브닝 드레스",
    rows: 2,
    cols: 8,
    borderRadius: "0px 48px",
  },
];
