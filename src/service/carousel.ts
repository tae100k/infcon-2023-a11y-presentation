import {CarouselItemType} from "types/carousel";

export const getRotatedItems = (
  items: CarouselItemType[],
  activeIndex: number
) => {
  const leftItems = items.slice(0, activeIndex);
  const rightItems = items.slice(activeIndex + 1);
  return [...rightItems, ...leftItems, items[activeIndex]];
};

export const getScaleValue = (items: CarouselItemType[], index: number) => {
  const middle = Math.floor(items.length / 2);
  const diff = Math.abs(middle - index);
  return diff === 0 ? 1 : diff === 1 ? 7 / 8 : 3 / 4;
};

export const getSizeValue = (index: number) => {
  const scale = getScaleValue(index);
  return {
    width: 400 * scale + "px",
    height: 450 * scale + "px",
  };
};
