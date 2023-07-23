import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { GalleryTitle } from "./GalleryTitle";
import { GalleryArticle } from "./GalleryArticle";

export const Gallery = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: {
          xs: "20px 16px",
          sm: "40px 32px",
          md: "80px 64px",
        },
        gap: {
          xs: 4,
          sm: 8,
          md: 12,
        },
      }}
    >
      <GalleryTitle />
      <GalleryArticle />
    </Box>
  );
};
