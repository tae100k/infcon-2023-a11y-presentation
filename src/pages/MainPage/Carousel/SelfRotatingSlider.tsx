import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {Box, Grid, IconButton} from "@mui/material";
import {carouselItems} from "constant/carousel";
import {useEffect, useRef, useState} from "react";
import {getRotatedItems} from "service/carousel.service";
import {CarouselItemCard} from "./CarouselItemCard";

export const SelfRotatingSlider = () => {
  const items = carouselItems;
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const sliderTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    sliderTimeout.current = setInterval(() => {
      moveRight();
    }, 2000);

    return () => {
      if (sliderTimeout.current) clearInterval(sliderTimeout.current);
    };
  }, [activeIndex]);

  const moveRight = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const moveLeft = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const rotatedItems = getRotatedItems(carouselItems, activeIndex);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        pb: "120px",
      }}
    >
      <IconButton
        onClick={moveLeft}
        sx={{
          position: "absolute",
          left: {sm: 20, md: 120},
          transform: "translateY(-50%)",
          top: "50%",
          borderRadius: "50%",
          bgcolor: "black",
          border: "2px solid white",
          color: "white",
          zIndex: 10,
          "&:hover": {
            backgroundColor: "black",
            borderColor: "white",
          },
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <ChevronLeft />
      </IconButton>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            height: "fit-content",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              width: "fit-content",
              marginTop: 0,
            }}
          >
            {rotatedItems.map((item, index) => (
              <CarouselItemCard item={item} index={index} />
            ))}
          </Grid>
        </Box>
      </Box>
      <IconButton
        onClick={moveRight}
        sx={{
          position: "absolute",
          right: {sm: 20, md: 120},
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          borderRadius: "50%",
          bgcolor: "black",
          border: "2px solid white",
          color: "white",
          "&:hover": {
            backgroundColor: "black",
            borderColor: "white",
          },
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};
