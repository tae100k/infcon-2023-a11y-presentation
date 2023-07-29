import {useState} from "react";
import "./InfoInput.css";

interface InfoInputProps {
  placeholder?: string;
  id: string;
}

export const InfoInput: React.FC<InfoInputProps> = ({placeholder, id}) => {
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
