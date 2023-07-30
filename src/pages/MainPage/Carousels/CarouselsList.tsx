import {Box, Grid, IconButton} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {carouselItems} from "constant/carousel";

const SelfRotatingSlider = () => {
  const items = carouselItems;
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const sliderTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    sliderTimeout.current = setInterval(() => {
      moveRight();
    }, 1000);

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
    const leftItems = items.slice(0, activeIndex);
    const rightItems = items.slice(activeIndex + 1);
    return [...rightItems, ...leftItems, items[activeIndex]];
  };

  const getScaleValue = (index: number) => {
    const middle = Math.floor(items.length / 2);
    const diff = Math.abs(middle - index);
    return diff === 0 ? 1 : diff === 1 ? 7 / 8 : 3 / 4;
  };

  const getSizeValue = (index: number) => {
    const scale = getScaleValue(index);
    return {
      width: 400 * scale + "px",
      height: 450 * scale + "px",
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
      <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
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
                }}
              >
                <CarouselItemCard src={item.src} />
              </Grid>
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

export default SelfRotatingSlider;

interface CarouselItemCardProps {
  src: string;
}

export const CarouselItemCard: React.FC<CarouselItemCardProps> = ({src}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        fontWeight: "bold",
        borderRadius: "6px",
      }}
    >
      <img
        src={src}
        alt="carousel item"
        style={{
          borderRadius: "6px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
