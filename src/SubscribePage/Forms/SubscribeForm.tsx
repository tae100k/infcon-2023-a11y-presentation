import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import "./SubscribeForm.css";
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const initialFormState: ContactForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const SubscribeForm = () => {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormState({...formState, [name]: value});
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(JSON.stringify(formState, null, 2));
    setFormState(initialFormState);
  };

  return (
    <Box
      sx={{
        padding: "32px 0px",
        width: "100%",
      }}
    >
      <Box gap={"16px"} display="flex" flexDirection={"column"} width="100%">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={formState.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formState.address}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
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
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        id={id}
        type="text"
        className="info-input"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
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
