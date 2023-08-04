import {Box, Typography} from "@mui/material";
import {ImageLists} from "./ImageList";
import {ArticleIntro} from "./ArticleIntro";
import {
  BoldTypography,
  DefaultTypography,
  StyledTypography,
} from "./GalleryArticleComponents";

export const GalleryArticle = () => {
  return (
    <Box display="flex" gap={"32px"} flexDirection={"column"}>
      <DefaultTypography />
      <ArticleIntro />
      <BoldTypography />
      <ImageLists />
      <StyledTypography />
    </Box>
  );
};
