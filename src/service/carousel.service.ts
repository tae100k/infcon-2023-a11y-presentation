import {VISIBLE_CAROUSEL_LENGTH} from "constant/carousel";
import {CarouselItemType} from "types/carousel";

export const getRotatedItems = (
  items: CarouselItemType[],
  activeIndex: number
) => {
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

export const getScaleValue = (index: number) => {
  const middle = Math.floor(VISIBLE_CAROUSEL_LENGTH / 2);
  const diff = Math.abs(middle - index);
  return diff === 0 ? 1 : diff === 1 ? 7 / 8 : 3 / 4;
};

export const getSizeValue = (index: number) => {
  const aspectRatio = 2 / 3;
  let maxWidth, maxHeight;

  if (index === 2) {
    maxWidth = 480;
    maxHeight = maxWidth / aspectRatio;
  } else if (index === 1 || index === 3) {
    maxWidth = 307;
    maxHeight = maxWidth / aspectRatio;
  } else {
    maxWidth = 240;
    maxHeight = maxWidth / aspectRatio;
  }

  return {
    width: maxWidth + "px",
    height: maxHeight + "px",
  };
};
