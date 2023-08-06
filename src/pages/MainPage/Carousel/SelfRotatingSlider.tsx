import {Box, Grid} from "@mui/material";
import {carouselItems} from "constant/carousel";
import {useCallback, useEffect, useRef, useState} from "react";
import {getRotatedItems} from "service/carousel.service";
import {CarouselItemCard} from "./CarouselItemCard";
import {NavigationButton} from "./NavigationButton";

export const SelfRotatingSlider = () => {
  const items = carouselItems;
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const sliderTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const moveRight = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const moveLeft = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }, [items.length]);

  useEffect(() => {
    sliderTimeout.current = setInterval(() => {
      moveRight();
    }, 10000);

    return () => {
      if (sliderTimeout.current) clearInterval(sliderTimeout.current);
    };
  }, [activeIndex, moveRight]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      moveRight();
    } else if (event.key === "ArrowLeft") {
      moveLeft();
    }
  };

  const rotatedItems = getRotatedItems(carouselItems, activeIndex);

  return (
    <Box
      tabIndex={0}
      onKeyDown={handleKeyDown}
      sx={{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        pb: "120px",
      }}
    >
      <NavigationButton
        direction="left"
        onClick={moveLeft}
        aria-label="Naviate to Previous slide"
      />
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
              <CarouselItemCard item={item} index={index} key={item.id} />
            ))}
          </Grid>
        </Box>
      </Box>
      <NavigationButton
        direction="right"
        onClick={moveRight}
        aria-label="Naviate to Next slide"
      />
    </Box>
  );
};
