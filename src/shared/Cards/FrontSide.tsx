import {Button, Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ArrowTopRightIcon} from "assets/icons/icon";
import React from "react";
import {CardItemDataType} from "types/card";

interface FrontSideProps {
  card: CardItemDataType;
  index: number;
}

export const FrontSide: React.FC<FrontSideProps> = ({card, index}) => {
  return (
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
        transition: "background-color 0.3s",
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

      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems="baseline"
      >
        {card.icon}
        <Link
          href={card.href}
          target={card.isExternal ? "_blank" : "_self"}
          rel={card.isExternal ? "noopener noreferrer" : ""}
          underline="none"
        >
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
        </Link>
      </Box>
    </Box>
  );
};
