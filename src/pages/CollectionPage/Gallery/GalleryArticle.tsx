import {Box} from "@mui/material";
import {ArticleIntro} from "./ArticleIntro";
import {
  BoldTypography,
  DefaultTypography,
  StyledTypography,
} from "./GalleryArticleComponents";
import {ImageLists} from "./ImageList";

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
