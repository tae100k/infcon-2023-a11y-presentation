import {Box} from "@mui/material";
import {ArticleIntro} from "./ArticleIntro";
import {BoldTypography, StyledTypography} from "./GalleryArticleComponent";
import {ImageLists} from "./ImageList";

export const GalleryArticle = () => {
  return (
    <Box display="flex" gap={"32px"} flexDirection={"column"}>
      <ArticleIntro />
      <BoldTypography />
      <ImageLists />
      <StyledTypography />
    </Box>
  );
};
