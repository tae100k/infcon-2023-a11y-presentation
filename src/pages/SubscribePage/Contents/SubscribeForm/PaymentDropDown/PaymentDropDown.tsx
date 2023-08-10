import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, {useRef, useState} from "react";
import "./PaymentDropDown.css";

interface PaymentDropDownProps {
  options: string[];
  selectedItem: number;
  onSelectItem: (index: number) => void;
}

export const PaymentDropDown: React.FC<PaymentDropDownProps> = ({
  options,
  selectedItem,
  onSelectItem,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const selectedOptionLabel = `${options[selectedItem]} 결제 방식 선택`;
  const toggleDropdown = () => setIsExpanded(!isExpanded);

  const iconWrapperClass = isExpanded
    ? "icon-wrapper expanded"
    : "icon-wrapper";

  const handleClickEvent = () => {
    if (isButtonFocused) {
      toggleDropdown();
    }
  };

  const handleKeyEvent = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (isButtonFocused && (event.key === "Enter" || event.key === " ")) {
      toggleDropdown();
      event.preventDefault();
    }
    if (event.key === "Escape" && isExpanded) {
      toggleDropdown();
      event.currentTarget.focus();
    }
  };

  const handleItemKeyEvent = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      onSelectItem(index);
      toggleDropdown();
      event.preventDefault();
    }
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-button"
        // tabIndex={0}
        ref={buttonRef}
        onClick={handleClickEvent}
        // onKeyDown={handleKeyEvent}
        // onFocus={() => setIsButtonFocused(true)}
        // onBlur={() => setIsButtonFocused(false)}
        // aria-label={selectedOptionLabel}
        // aria-haspopup="listbox"
        // aria-expanded={isExpanded}
      >
        <div className="dropdown-selected">{options[selectedItem]}</div>
        <div className={iconWrapperClass}>
          {isExpanded ? (
            <KeyboardArrowUpIcon color="action" />
          ) : (
            <ExpandMoreIcon color="action" />
          )}
        </div>
      </button>
      {isExpanded && (
        <div className="dropdown-menu" role="listbox">
          {options.map((option, index) => (
            <div
              key={`dropdown-option-${index}`}
              className={`dropdown-item ${
                index === selectedItem ? "selected" : ""
              }`}
              onClick={() => {
                onSelectItem(index);
                toggleDropdown();
              }}
              // onKeyDown={(event) => handleItemKeyEvent(event, index)}
              // tabIndex={0}
              // role="option"
              // aria-selected={selectedItem === index}
            >
              {option}
              {index === selectedItem && (
                <CheckIcon fontSize="small" style={{marginLeft: "8px"}} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
