import React, {useState} from "react";
import "./InputBox.css";

interface InfoInputProps {
  placeholder?: string;
  id: string;
}

export const InputBox: React.FC<InfoInputProps> = ({placeholder, id}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="container">
      <label
        htmlFor={id}
        className={`label${inputValue || isFocused ? " focused" : ""}`}
      >
        {placeholder}
      </label>
      <input
        id={id}
        type="text"
        className={`inputField${inputValue || isFocused ? " focused" : ""}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
