import {Button, Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ArrowTopRightIcon} from "assets/icons/icon";
import React from "react";
import {CardItemDataType} from "types/card";

interface BackSideProps {
  card: CardItemDataType;
  index: number;
}

export const BackSide: React.FC<BackSideProps> = ({card, index}) => {
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
        backgroundColor: "inherit",
        transition: "background-color 0.3s",
        backgroundImage: `url(${card.hoverImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            lineHeight: "125%",
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

      <Box display="flex" justifyContent={"flex-end"} alignItems="baseline">
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
              backgroundColor: "#FFF",
              "&:hover": {
                backgroundColor: "white",
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
