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
  detailAddress: string;
}

const initialFormState: ContactForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  detailAddress: "",
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("폼이 성공적으로 제출되었습니다.");
    setFormState(initialFormState);
    setSelectedItem(0);
    setIsAnnual(false);
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
              whiteSpace: "pre-wrap",
            }}
          >
            {isAnnual ? "연간 구독으로 매월 10%를 아끼세요!" : "\n"}
          </Typography>
        </Box>

        <form className="form-container" onSubmit={handleSubmit}>
          <InputBox
            id="name"
            placeholder="이름"
            name="name"
            value={formState.name}
            onChange={handleChange}
            // type="text"
            // required
            // autoComplete="name"
          />
          <InputBox
            id="email"
            placeholder="이메일"
            name="email"
            value={formState.email}
            onChange={handleChange}
            // type="email"
            // required
            // autoComplete="email"
          />
          <InputBox
            id="phone"
            placeholder="전화번호"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            // type="tel"
            // required
            // autoComplete="tel"
          />
          <InputBox
            id="address"
            placeholder="도로명 주소"
            name="address"
            value={formState.address}
            onChange={handleChange}
            // autoComplete="street-address"
          />
          <InputBox
            id="detail-address"
            placeholder="상세 주소"
            name="detailAddress"
            value={formState.detailAddress}
            onChange={handleChange}
            // autoComplete="street-address"
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
            <SubscribeSubmitButton />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export {SubscribeForm};
