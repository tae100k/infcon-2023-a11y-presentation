import {Button, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {
  ArrowTopRightIcon,
  FourIcon,
  SatelliteIcon,
  TornadoIcon,
} from "icons/icon";

const Cards = () => {
  return (
    <Box>
      <Grid container spacing={2} p={"24px"} borderTop="2px solid black">
        {cardData.map((card, index) => {
          return (
            <Grid key={index} item xs={12} md={4}>
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
                }}
              >
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
};

const cardData = [
  {
    title: `From\n다카르,\nTo\n도쿄`,
    icon: <TornadoIcon sx={commonIconProps} />,
    isExternal: false,
    href: "",
  },
  {
    title: "NULI\nX\nNAVER",
    icon: <FourIcon sx={commonIconProps} />,
    isExternal: false,
    href: "",
  },
  {
    title: "The\nA11Y\nProject",
    icon: <SatelliteIcon sx={commonIconProps} />,
    isExternal: false,
    href: "",
  },
];
