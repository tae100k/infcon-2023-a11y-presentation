import {ImageList, ImageListItem} from "@mui/material";

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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 4,
    cols: 5,
    borderRadius: "48px 0px",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    rows: 2,
    cols: 10,
    borderRadius: "0px 48px",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    rows: 3,
    cols: 5,
    borderRadius: "0px 48px",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    rows: 4,
    cols: 5,
    borderRadius: "48px 0px",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    rows: 3,
    cols: 10,
    borderRadius: "48px 0px",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
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
