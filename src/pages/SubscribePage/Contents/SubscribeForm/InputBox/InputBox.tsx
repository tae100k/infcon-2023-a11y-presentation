import React, {ChangeEvent, useState} from "react";
import "./InputBox.css";

const InputBox: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <div className="label">이름</div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="inputField"
      />
    </div>
  );
};

export default InputBox;
