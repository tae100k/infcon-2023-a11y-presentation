import React, {useState} from "react";
import "./PaymentDropDown.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

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
  const toggleDropdown = () => setIsExpanded(!isExpanded);
  const iconWrapperClass = isExpanded
    ? "icon-wrapper expanded"
    : "icon-wrapper";

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
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
        <div className="dropdown-menu">
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
