import {Box, Container} from "@mui/material";
import {GalleryArticle} from "./GalleryArticle";

export const Gallery = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: {
          xs: "20px 16px",
          sm: "40px 32px",
          md: "80px 64px",
        },
        gap: {
          xs: 4,
        },
      }}
    >
      <Container maxWidth={"md"}>
        <GalleryArticle />
      </Container>
    </Box>
  );
};
