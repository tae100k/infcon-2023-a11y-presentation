import {ImageList, ImageListItem} from "@mui/material";
import {
  CollectionImage1,
  CollectionImage2,
  CollectionImage3,
  CollectionImage4,
  CollectionImage5,
  CollectionImage6,
} from "assets/images";

export const ImageLists = () => {
  return (
    <ImageList
      variant="quilted"
      cols={20}
      rowHeight={121}
      gap={25}
      sx={{
        overflow: "visible",
      }}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{
              border: "2px solid var(--black, #000)",
              borderRadius: item.borderRadius,
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export const itemData = [
  {
    img: CollectionImage1,
    title: "Breakfast",
    rows: 4,
    cols: 5,
    borderRadius: "48px 0px",
  },
  {
    img: CollectionImage2,
    title: "Burger",
    rows: 2,
    cols: 10,
    borderRadius: "0px 48px",
  },
  {
    img: CollectionImage3,
    title: "Camera",
    rows: 3,
    cols: 5,
    borderRadius: "0px 48px",
  },
  {
    img: CollectionImage4,
    title: "Coffee",
    rows: 4,
    cols: 5,
    borderRadius: "48px 0px",
  },
  {
    img: CollectionImage5,
    title: "Basketball",
    rows: 3,
    cols: 10,
    borderRadius: "48px 0px",
  },
  {
    img: CollectionImage6,
    title: "Fern",
    rows: 2,
    cols: 5,
    borderRadius: "0px 48px",
  },
];

export const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};
