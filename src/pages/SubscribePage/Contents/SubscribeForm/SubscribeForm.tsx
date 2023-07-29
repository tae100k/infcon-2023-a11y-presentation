import {Box, Typography} from "@mui/material";
import React, {useState} from "react";
import {ConsentsCheckboxes} from "./ConsentsCheckboxes";
import {InfoInput} from "./InfoInput";
import {PaymentDropdown} from "./PaymentDropdown";
import {PaymentPeriodSwitch} from "./PaymentPeriodSwitch/PaymentPeriodSwitch";
import "./SubscribeForm.css";
import {SubscribeSubmitButton} from "./SubscribeSubmitButton";

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
        <Box
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          gap={2}
        >
          <PaymentPeriodSwitch />
          <Typography
            sx={{
              color: "#000",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.21px",
            }}
          >
            연간 구독으로 매월 10%를 아끼세요!
          </Typography>
        </Box>

        <form className="form-container">
          <InfoInput id={"name"} placeholder={"이름"} />
          <InfoInput id={"email"} placeholder={"이메일"} />
          <InfoInput id={"number"} placeholder={"전화번호"} />
          <InfoInput id={"address"} placeholder={"도로명 주소"} />
          <InfoInput id={"detail address"} placeholder={"상세 주소"} />
        </form>
        <Box gap={"24px"} display="flex" flexDirection={"column"}>
          <PaymentDropdown />
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
          <SubscribeSubmitButton />
        </Box>
      </Box>
    </Box>
  );
};

export {SubscribeForm};
