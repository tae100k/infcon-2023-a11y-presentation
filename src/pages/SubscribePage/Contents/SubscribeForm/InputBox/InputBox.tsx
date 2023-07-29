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
      <div className={`label${inputValue || isFocused ? " focused" : ""}`}>
        이름
      </div>
      <input
        id={id}
        type="text"
        className="inputField"
        placeholder={inputValue || isFocused ? "" : placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
