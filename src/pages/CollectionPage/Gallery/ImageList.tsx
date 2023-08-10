import {ImageList, ImageListItem, useMediaQuery} from "@mui/material";
import {galleryGridImages} from "constant/gallery";

export const ImageLists = () => {
  const isSmallViewport = useMediaQuery("(max-width:720px)");

  return (
    <ImageList
      variant="quilted"
      cols={isSmallViewport ? 1 : 25}
      rowHeight={isSmallViewport ? "auto" : 100}
      gap={20}
      sx={{overflow: "visible"}}
    >
      {galleryGridImages.map((item) => (
        <ImageListItem
          key={item.img}
          cols={isSmallViewport ? 1 : item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item?.alt ?? ""}
            loading="lazy"
            style={{
              border: "2px solid var(--black, #000)",
              borderRadius: item.borderRadius,
              objectPosition: isSmallViewport ? "top" : undefined,
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
