import {Box} from "@mui/material";
import React, {useEffect, useState} from "react";
import "./InputBox.css";

interface InfoInputProps {
  id: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
}

export const InputBox: React.FC<InfoInputProps> = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  autoComplete,
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <div className="container">
        <label
          htmlFor={id}
          className={`label${inputValue || isFocused ? " focused" : ""}`}
        >
          {placeholder}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          className={`inputField${inputValue || isFocused ? " focused" : ""}`}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          required={required}
          autoComplete={autoComplete}
        />
      </div>
    </Box>
  );
};
