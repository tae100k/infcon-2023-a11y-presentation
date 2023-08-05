import {Box, Checkbox, FormControlLabel} from "@mui/material";
import React from "react";
import "./SubscribeForm.css";

export const ConsentsCheckboxes = () => {
  const [checked, setChecked] = React.useState({
    all: true,
    consent1: true,
    consent2: true,
    consent3: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked: isChecked} = event.target;

    if (name === "all") {
      setChecked({
        all: isChecked,
        consent1: isChecked,
        consent2: isChecked,
        consent3: isChecked,
      });
    } else {
      setChecked({
        ...checked,
        all: false,
        [name]: isChecked,
      });
    }
  };

  const isAllChecked = checked.consent1 && checked.consent2 && checked.consent3;

  return (
    <Box>
      <FormControlLabel
        label={<span id="all-consent-label">전체동의</span>}
        control={
          <Checkbox
            name="all"
            checked={isAllChecked}
            indeterminate={
              !isAllChecked &&
              (checked.consent1 || checked.consent2 || checked.consent3)
            }
            inputProps={{"aria-labelledby": "all-consent-label"}}
            sx={{borderRadius: "4px"}}
            onChange={handleChange}
          />
        }
      />
      <Box sx={{display: "flex", flexDirection: "column", ml: 3}}>
        <FormControlLabel
          label={<span id="consent1-label">전자금융거래 기본약관 (필수)</span>}
          control={
            <Checkbox
              name="consent1"
              checked={checked.consent1}
              inputProps={{"aria-labelledby": "consent1-label"}}
              sx={{borderRadius: "4px"}}
              onChange={handleChange}
            />
          }
        />
        <FormControlLabel
          label={
            <span id="consent2-label">개인정보 수집 및 이용 동의 (필수)</span>
          }
          control={
            <Checkbox
              name="consent2"
              checked={checked.consent2}
              inputProps={{"aria-labelledby": "consent2-label"}}
              sx={{borderRadius: "4px"}}
              onChange={handleChange}
            />
          }
        />
        <FormControlLabel
          label={
            <span id="consent3-label">
              마케팅 활용 동의 및 광고 수신 동의 (선택)
            </span>
          }
          control={
            <Checkbox
              name="consent3"
              checked={checked.consent3}
              inputProps={{"aria-labelledby": "consent3-label"}}
              sx={{borderRadius: "4px"}}
              onChange={handleChange}
            />
          }
        />
      </Box>
    </Box>
  );
};
