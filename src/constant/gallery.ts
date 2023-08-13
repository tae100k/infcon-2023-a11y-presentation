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
    alt: "",
    rows: 5,
    cols: 8,
    borderRadius: "24px 0px",
  },
  {
    img: CollectionImage2,
    alt: "",
    rows: 3,
    cols: 10,
    borderRadius: "0px 24px",
  },
  {
    img: CollectionImage3,
    alt: "",
    rows: 3,
    cols: 7,
    borderRadius: "0px 24px",
  },
  {
    img: CollectionImage5,
    alt: "",
    rows: 4,
    cols: 6,
    borderRadius: "24px 0px",
  },
  {
    img: CollectionImage6,
    alt: "",
    rows: 4,
    cols: 11,
    borderRadius: "24px 0px",
  },
  {
    img: CollectionImage4,
    alt: "",
    rows: 2,
    cols: 8,
    borderRadius: "0px 24px",
  },
];
