import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Typography,
} from "@mui/material";
import React, {ChangeEvent, useState} from "react";

const SubscribeForm = () => {
  return (
    <Box
      sx={{
        padding: "32px 0px",
        width: "100%",
      }}
    >
      <Box gap={"16px"} display="flex" flexDirection={"column"} width="100%">
        {/* <SubscriptionSelect /> */}
        <InfoInput id={"name"} placeholder={"이름"} />
        <InfoInput id={"email"} placeholder={"이메일"} />
        <InfoInput id={"number"} placeholder={"전화번호"} />
        <InfoInput id={"address"} placeholder={"도로명 주소"} />
        <InfoInput id={"detail address"} placeholder={"상세 주소"} />
        <Consents />
      </Box>
    </Box>
  );
};

export {SubscribeForm};

const SubscriptionSelect = () => {
  return (
    <Box>
      d<Typography>구독 방식</Typography>
      <Box>
        {/* <Radio label={"연간 구독 (월 7,200원)"} defaultChecked />
        <Radio label={"월간 구독 (월 8,000원)"} /> */}
      </Box>
      d
    </Box>
  );
};

interface InfoInputProps {
  placeholder?: string;
  id: string;
}

const InfoInput: React.FC<InfoInputProps> = ({placeholder, id}) => {
  return (
    <Input
      id={id}
      aria-describedby="my-helper-text"
      sx={{
        width: "100%",
        padding: "8px 16px",
        border: "2px solid #000",
        background: "#E7E2DF",
      }}
      placeholder={placeholder}
    />
  );
};

const Consents = () => {
  return (
    <Box gap={"24px"} display="flex" flexDirection={"column"}>
      <Dropdown />
      <Box display={"flex"} justifyContent="space-between">
        <Typography
          sx={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "125%",
          }}
        >
          결제 금액
        </Typography>
        <Typography
          sx={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Pretendard, sans-serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "125%",
          }}
        >
          86,400원
        </Typography>
      </Box>
      <ConsentsCheckboxes />
      <SubscribeButton />
    </Box>
  );
};

export const Dropdown: React.FC = () => {
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
const ConsentsCheckboxes = () => {
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
export const SubscribeButton = () => {
  return (
    <Button
      sx={{
        display: "flex",
        padding: "16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        alignSelf: "stretch",
        border: "1px solid #000",
        background: "#000",
        color: "white",
        "&:hover": {
          background: "#000", // Maintain the background color when hovering
          borderColor: "#000", // Maintain the border color when hovering
          opacity: 0.8, // Optional: you can add a slight change in the opacity if you want
        },
      }}
    >
      <span
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "125%",
        }}
      >
        구독 신청
      </span>
    </Button>
  );
};
