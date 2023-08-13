import {Box} from "@mui/material";
import {ArticleIntro} from "./ArticleIntro";
import {
  BodyText,
  IntroductionText,
  FooterText,
} from "./GalleryArticleComponents";
import {GalleryTitle} from "./GalleryTitle";
import {ImageLists} from "./ImageList";

export const GalleryArticle = () => {
  return (
    <Box display="flex" gap={"32px"} flexDirection={"column"}>
      <GalleryTitle />
      <IntroductionText />
      <ArticleIntro />
      <BodyText />
      <ImageLists />
      <FooterText />
    </Box>
  );
};
