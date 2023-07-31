import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import {cardData} from "constant/card";
import {useState} from "react";
import {BackSide} from "./BackSide";
import {FrontSide} from "./FrontSide";

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
              // onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {hoveredCard !== index ? (
                <FrontSide card={card} index={index} />
              ) : (
                <BackSide card={card} index={index} />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export {Cards};
