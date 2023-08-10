import React from "react";
import "./PaymentPeriodSwitch.css";

interface PaymentPeriodSwitchProps {
  isAnnual: boolean;
  onChange: () => void;
}

export const PaymentPeriodSwitch: React.FC<PaymentPeriodSwitchProps> = ({
  isAnnual,
  onChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange();
    }
  };

  const handleClickOption = (selected: boolean) => {
    if (!selected) {
      onChange();
    }
  };

  return (
    <div
      className="toggle-container"
      // role="switch"
      // aria-checked={isAnnual}
      // aria-label={`Subscription type, ${
      //   isAnnual ? "연간 구독" : "월간 구독"
      // } selected`}
      // tabIndex={0}
      // onKeyDown={handleKeyDown}
    >
      <div
        className="toggle-option"
        onClick={() => handleClickOption(!isAnnual)}
      >
        <span className="toggle-option-text">월간 구독</span>
      </div>
      <div
        className="toggle-option"
        onClick={() => handleClickOption(isAnnual)}
      >
        <span className="toggle-option-text">연간 구독</span>
      </div>
      <div
        className="slider"
        style={{transform: isAnnual ? "translateX(100%)" : "translateX(0)"}}
      >
        <span className="slider-text">
          {isAnnual ? "연간 구독" : "월간 구독"}
        </span>
      </div>
    </div>
  );
};
