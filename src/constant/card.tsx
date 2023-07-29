import {FourIcon, SatelliteIcon, TornadoIcon} from "icons/icon";

const commonIconProps = {
  width: {
    xs: "80px",
    sm: "111px",
    md: "90px",
    lg: "111px",
    xl: "111px",
  },
  height: {
    xs: "45px",
    sm: "90px",
    md: "70px",
    lg: "90px",
    xl: "90px",
  },
  display: "block",
  opacity: 1,
  transition: "opacity 0.3s",
};

export const cardData = [
  {
    title: `From\n다카르,\nTo\n도쿄`,
    icon: <TornadoIcon className={"icon"} sx={commonIconProps} />,
    isExternal: false,
    href: "",
    badgeLabel: "Fashion",
    hoverText:
      "샤넬의 다카르 공방 컬렉션의 레플리카 쇼:\n패션, 무용, 음악이 만나 펼친 창의적 대화의 현장",
    hoverImageUrl: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    title: "NULI\nX\nNAVER",
    icon: <FourIcon className={"icon"} sx={commonIconProps} />,
    isExternal: false,
    href: "",
    badgeLabel: "Experience",
    hoverText:
      "나와 다른 사용자의 상황에 공감하여\n웹의 문턱을 낮춰주는 웹 접근성 체험",
    hoverImageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    title: "The\nA11Y\nProject",
    icon: <SatelliteIcon className={"icon"} sx={commonIconProps} />,
    isExternal: false,
    href: "",
    badgeLabel: "IT / Design",
    hoverText:
      "개발자도 디자이너도 기획자도 알아야하는\n유니버설 디자인을 위한 웹 접근성 가이드라인",
    hoverImageUrl:
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  },
];
