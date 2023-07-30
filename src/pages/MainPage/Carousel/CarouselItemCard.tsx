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
      item
      key={item.id}
      sx={{
        ...getSizeValue(index),
        borderRadius: "48px 0px",
        border: "1px solid #000",
        background: `lightgray 50% / cover no-repeat`,
        transform: `scale(${getScaleValue(index)})`,
        transition: "transform 0.5s  zIndex 0.5s",
        backgroundImage: `url(${item.src})`,
      }}
    />
  );
};
