import {FormControl, MenuItem, Select} from "@mui/material";
import {useState} from "react";

export const PaymentDropdown: React.FC = () => {
  const [value, setValue] = useState("신용/체크카드");

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        border: "2px solid #000",
        background: "#E7E2DF",
      }}
    >
      <Select
        labelId="select-label"
        id="mui-select"
        value={value}
        displayEmpty
        // onChange={handleChange}
        variant="standard"
        sx={{
          width: "100%",
        }}
      >
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};
