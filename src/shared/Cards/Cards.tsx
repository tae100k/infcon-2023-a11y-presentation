import {Button, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {cardData} from "constant/card";
import {ArrowTopRightIcon} from "icons/icon";
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
