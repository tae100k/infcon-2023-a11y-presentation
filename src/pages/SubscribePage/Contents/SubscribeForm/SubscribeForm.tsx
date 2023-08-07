import {Box, Typography} from "@mui/material";
import {paymentMethodOptions} from "constant/card";
import React, {useState} from "react";
import {ConsentsCheckboxes} from "./ConsentsCheckboxes";
import {InputBox} from "./InputBox/InputBox";
import {PaymentDropDown} from "./PaymentDropDown/PaymentDropDown";
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
  const [selectedItem, setSelectedItem] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);
  const handleChangePeriod = () => {
    setIsAnnual(!isAnnual);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormState({...formState, [name]: value});
  };

  const handleSubmit = () => {
    console.log("Form data:", formState);
    console.log("Selected payment method index:", selectedItem);
    console.log("Selected payment period:", isAnnual);
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
          <PaymentPeriodSwitch
            isAnnual={isAnnual}
            onChange={handleChangePeriod}
          />
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
          <InputBox
            id="name"
            name="name"
            placeholder="이름"
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <InputBox
            id="email"
            name="email"
            type="email"
            placeholder="이메일"
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <InputBox
            id="phone"
            name="phone"
            type="tel"
            placeholder="전화번호"
            onChange={handleChange}
            required
            autoComplete="tel"
          />
          <InputBox
            id="address"
            name="address"
            placeholder="도로명 주소"
            onChange={handleChange}
            required
            autoComplete="street-address"
          />
          <InputBox
            id="detail-address"
            name="address"
            placeholder="상세 주소"
            onChange={handleChange}
            autoComplete="street-address"
          />

          <Box gap={"24px"} display="flex" flexDirection={"column"}>
            <PaymentDropDown
              options={paymentMethodOptions}
              selectedItem={selectedItem}
              onSelectItem={setSelectedItem}
            />
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
                {isAnnual ? "86,400원" : "7,900원"}
              </Typography>
            </Box>
            <ConsentsCheckboxes />
            <SubscribeSubmitButton onClick={handleSubmit} />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export {SubscribeForm};
