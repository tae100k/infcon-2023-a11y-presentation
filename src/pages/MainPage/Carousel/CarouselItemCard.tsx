import {Grid} from "@mui/material";
import React from "react";
import {getScaleValue, getSizeValue} from "service/carousel.service";
import {CarouselItemType} from "types/carousel";

interface CarouselItemCardProps {
  item: CarouselItemType;
  index: number;
}

export const CarouselItemCard: React.FC<CarouselItemCardProps> = ({
  item,
  index,
}) => {
  return (
    <Grid
      aria-label={`${item.id}, slide ${index + 1}`}
      aria-roledescription="carouselitem"
      key={item.id}
      sx={{
        position: "relative",
        ...getSizeValue(index),
        borderRadius: "48px 0px",
        border: "1px solid #000",
        overflow: "hidden",
        transform: `scale(${getScaleValue(index)})`,
        transition: "transform 0.5s, zIndex 0.5s",
      }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ""}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Grid>
  );
};
