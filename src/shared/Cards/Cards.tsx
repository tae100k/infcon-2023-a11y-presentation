import {Button, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {
  ArrowTopRightIcon,
  FourIcon,
  SatelliteIcon,
  TornadoIcon,
} from "icons/icon";
import {useState} from "react";

const Cards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box>
      <Grid container spacing={2} p={"24px"} borderTop="2px solid black">
        {cardData.map((card, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Box
                border="2px solid black"
                borderRadius={"0px 48px"}
                p={"24px"}
                gap={"16px"}
                display="flex"
                justifyContent={"space-between"}
                flexDirection={"column"}
                sx={{
                  aspectRatio: 1 / 1,
                  backgroundColor: "inherit",
                  transition: "background-color 0.3s",
                  ":hover": {
                    backgroundImage: `url(${card.hoverImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  },
                  ":hover .icon": {
                    opacity: 0,
                  },
                }}
              >
                {hoveredCard === index ? (
                  <Box display={"flex"} flexDirection="column" gap={2}>
                    <Box
                      component="span"
                      sx={{
                        padding: "4px 12px",
                        width: "fit-content",
                        borderRadius: "9999px",
                        border: "1px solid #FFF",
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          lineHeight: "125%",
                          letterSpacing: "0.18px",
                          color: "white",
                        }}
                      >
                        {card.badgeLabel}
                      </Typography>
                    </Box>
                    <Typography
                      whiteSpace={"pre-wrap"}
                      textAlign={"start"}
                      sx={{
                        color: "#FFF",
                        fontSize: {xs: "16px", sm: "18px", lg: "20px"},
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "125%", // 25px
                        letterSpacing: {
                          xs: "0.3px",
                          sm: "0.48px",
                          lg: "0.54px",
                        },
                      }}
                    >
                      {card.hoverText}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    whiteSpace={"pre-wrap"}
                    textAlign={"start"}
                    sx={{
                      fontSize: {xs: "16px", sm: "24px", lg: "36px"},
                      fontStyle: "normal",
                      lineHeight: "normal",
                      letterSpacing: {
                        xs: "0.36px",
                        sm: "0.48px",
                        lg: "0.54px",
                      },
                      fontWeight: 700,
                    }}
                  >
                    {card.title}
                  </Typography>
                )}

                <Box display="flex" justifyContent={"space-between"}>
                  {card.icon}
                  <Button
                    variant="outlined"
                    sx={{
                      p: "8px 12px",
                      borderRadius: "9999px",
                      alignSelf: "flex-end",
                      height: "fit-content",
                      color: "black",
                      borderColor: "black",
                      gap: "4px",
                      textAlign: "center",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: {
                        xs: "12px",
                        sm: "13px",
                      },
                      backgroundColor:
                        hoveredCard !== null ? "#FFF" : "transparent",
                    }}
                  >
                    Go to Page
                    <ArrowTopRightIcon
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "18px",
                          lg: "20px",
                          xl: "20px",
                        },
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export {Cards};

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

const cardData = [
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
