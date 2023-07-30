import React from "react";

interface CarouselItemCardProps {
  src: string;
}

export const CarouselItemCard: React.FC<CarouselItemCardProps> = ({src}) => {
  return (
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
  );
};
