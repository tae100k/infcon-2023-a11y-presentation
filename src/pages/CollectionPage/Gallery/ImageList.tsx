import {ImageList, ImageListItem} from "@mui/material";
import {galleryGridImages} from "constant/gallery";

export const ImageLists = () => {
  return (
    <ImageList
      variant="quilted"
      cols={25}
      rowHeight={100}
      gap={20}
      sx={{
        overflow: "visible",
      }}
      role="presentation"
    >
      {galleryGridImages.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item?.alt ?? ""}
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

export const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};
