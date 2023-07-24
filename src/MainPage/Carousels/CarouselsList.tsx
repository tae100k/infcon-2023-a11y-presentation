import {Box, Grid, IconButton} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";

const SelfRotatingSlider = () => {
  const items = [
    {key: "item1", component: <Item number={1} color="red" />},
    {key: "item2", component: <Item number={2} color="blue" />},
    {key: "item3", component: <Item number={3} color="green" />},
    {key: "item4", component: <Item number={4} color="yellow" />},
    {key: "item5", component: <Item number={5} color="purple" />},
  ];
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
    return diff === 0 ? 1 : diff === 1 ? 0.75 : 0.5;
  };

  const rotatedItems = getRotatedItems();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <IconButton onClick={moveLeft}>left</IconButton>
        </Grid>
        {rotatedItems.map((item, index) => (
          <Grid
            item
            key={item.key}
            style={{
              transform: `scale(${getScaleValue(index)})`,
              transition:
                "transform 0.5s cubic-bezier(0.5, 0, 0.25, 1), zIndex 0.5s",
              zIndex: getScaleValue(index) === 1 ? 1 : 0,
            }}
          >
            {item.component}
          </Grid>
        ))}
        <Grid item>
          <IconButton onClick={moveRight}>right</IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelfRotatingSlider;

interface ItemProps {
  number: number;
  color: string;
}

export const Item: React.FC<ItemProps> = ({number, color}) => {
  return (
    <Box
      sx={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        fontWeight: "bold",
        borderRadius: "6px",
      }}
    >
      {number}
    </Box>
  );
};
