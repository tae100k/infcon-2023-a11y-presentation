import {Grid} from "@mui/material";
import React from "react";
import {getSizeValue} from "service/carousel.service";
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
      // aria-roledescription="carouselitem"
      key={item.id}
      sx={{
        ...getSizeValue(index),
        position: "relative",
        borderRadius: "24px 0px",
        border: "1px solid #000",
        overflow: "hidden",
        transition: "transform 0.5s, z-index 0.5s",
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
