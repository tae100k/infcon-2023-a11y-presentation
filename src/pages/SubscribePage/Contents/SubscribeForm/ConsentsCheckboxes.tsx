import {Box, Checkbox, FormControlLabel} from "@mui/material";
import React from "react";
import "./SubscribeForm.css";

export const ConsentsCheckboxes = () => {
  const [checked, setChecked] = React.useState([true, false, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked([
      isChecked,
      isChecked ? true : checked[1],
      isChecked ? true : checked[2],
    ]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked([isChecked && checked[1], isChecked, checked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked([isChecked && checked[0], isChecked, checked[2]]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked([checked[0], checked[1], isChecked]);
  };
  const isAllChecked = () => checked.every((c) => c);

  return (
    <Box>
      <FormControlLabel
        label="전체동의"
        control={
          <Checkbox
            checked={isAllChecked()}
            indeterminate={!isAllChecked() && checked.some((c) => c)}
            sx={{borderRadius: "4px"}}
            onChange={handleChange1}
          />
        }
      />
      <Box sx={{display: "flex", flexDirection: "column", ml: 3}}>
        <FormControlLabel
          label="전자금융거래 기본약관 (필수)"
          control={
            <Checkbox
              checked={checked[0]}
              sx={{borderRadius: "4px"}}
              onChange={handleChange2}
            />
          }
        />
        <FormControlLabel
          label="개인정보 수집 및 이용 동의 (필수)"
          control={
            <Checkbox
              checked={checked[1]}
              sx={{borderRadius: "4px"}}
              onChange={handleChange3}
            />
          }
        />
        <FormControlLabel
          label="마케팅 활용 동의 및 광구 수신 동의 (선택)"
          control={
            <Checkbox
              checked={checked[2]}
              sx={{borderRadius: "4px"}}
              onChange={handleChange4}
            />
          }
        />
      </Box>
    </Box>
  );
};
