import {ImageList, ImageListItem, Theme, useMediaQuery} from "@mui/material";
import {galleryGridImages} from "constant/gallery";

export const ImageLists = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const cols = isMobile ? 2 : isTablet ? 3 : 5;
  const rowHeight = isMobile ? 180 : isTablet ? 150 : 121;
  return (
    <ImageList
      variant="quilted"
      cols={cols}
      rowHeight={rowHeight}
      gap={20}
      sx={{
        overflow: "visible",
      }}
    >
      {galleryGridImages.map((item) => (
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

export const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};
