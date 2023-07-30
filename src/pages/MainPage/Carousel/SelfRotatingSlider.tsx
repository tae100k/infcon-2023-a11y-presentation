import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {Box, Grid, IconButton} from "@mui/material";
import {carouselItems, VISIBLE_CAROUSEL_LENGTH} from "constant/carousel";
import {useEffect, useRef, useState} from "react";

export const SelfRotatingSlider = () => {
  const items = carouselItems;
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const sliderTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    sliderTimeout.current = setInterval(() => {
      moveRight();
    }, 500);

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

  const getRotatedItems = () => {
    const halfLength = Math.floor(VISIBLE_CAROUSEL_LENGTH / 2);
    const leftVisibleItems = Array.from({length: halfLength}, (_, i) => {
      const index = (activeIndex - i - 1 + items.length) % items.length;
      return items[index];
    }).reverse();
    const rightVisibleItems = Array.from({length: halfLength}, (_, i) => {
      const index = (activeIndex + i + 1) % items.length;
      return items[index];
    });
    return [...leftVisibleItems, items[activeIndex], ...rightVisibleItems];
  };

  const getScaleValue = (index: number) => {
    const middle = Math.floor(VISIBLE_CAROUSEL_LENGTH / 2);
    const diff = Math.abs(middle - index);
    return diff === 0 ? 1 : diff === 1 ? 7 / 8 : 3 / 4;
  };

  const getSizeValue = (index: number) => {
    const aspectRatio = 2 / 3;
    let maxWidth, maxHeight;

    if (index === 2) {
      // First item, index 1 (0-based index)
      maxWidth = 480;
      maxHeight = maxWidth / aspectRatio;
    } else if (index === 1 || index === 3) {
      // Second item from the start and the end, index 2 and 0
      maxWidth = 307;
      maxHeight = maxWidth / aspectRatio;
    } else {
      // Remaining items
      maxWidth = 240;
      maxHeight = maxWidth / aspectRatio;
    }

    return {
      width: maxWidth + "px",
      height: maxHeight + "px",
    };
  };

  const rotatedItems = getRotatedItems();

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
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
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
              <Grid
                item
                key={item.id}
                sx={{
                  ...getSizeValue(index),
                  borderRadius: "48px 0px",
                  border: "1px solid #000",
                  background: `lightgray 50% / cover no-repeat`,
                  transform: `scale(${getScaleValue(index)})`,
                  transition: "transform 0.5s  zIndex 0.5s",
                  zIndex: getScaleValue(index) === 1 ? 1 : 0,
                  backgroundImage: `url(${item.src})`,
                }}
              />
            ))}
          </Grid>
        </Box>
      </Box>
      <IconButton
        onClick={moveRight}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};
