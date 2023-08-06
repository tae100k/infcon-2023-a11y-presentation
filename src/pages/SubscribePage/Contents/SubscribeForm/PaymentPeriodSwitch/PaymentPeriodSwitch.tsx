import React from "react";
import "./PaymentPeriodSwitch.css";

interface PaymentPeriodSwitchProps {
  selectedOption: "monthly" | "yearly";
  onChange: (value: "monthly" | "yearly") => void;
}

export const PaymentPeriodSwitch: React.FC<PaymentPeriodSwitchProps> = ({
  selectedOption,
  onChange,
}) => {
  const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as "monthly" | "yearly");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft" && selectedOption === "yearly") {
      onChange("monthly");
    }
    if (event.key === "ArrowRight" && selectedOption === "monthly") {
      onChange("yearly");
    }
  };

  return (
    <fieldset
      className="toggle-switch"
      aria-label="구독 주기 토글"
      role="group"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <input
        type="radio"
        id="monthly"
        name="subscription"
        value="monthly"
        checked={selectedOption === "monthly"}
        onChange={handlePeriodChange}
        role="checkbox"
        aria-checked={selectedOption === "monthly"}
        aria-live="polite"
      />
      <label
        htmlFor="monthly"
        className={`option ${selectedOption === "monthly" ? "selected" : ""}`}
      >
        월간 구독
      </label>

      <input
        type="radio"
        id="yearly"
        name="subscription"
        value="yearly"
        checked={selectedOption === "yearly"}
        onChange={handlePeriodChange}
        aria-checked={selectedOption === "yearly"}
        role="checkbox"
        aria-live="polite"
      />
      <label
        htmlFor="yearly"
        className={`option ${selectedOption === "yearly" ? "selected" : ""}`}
      >
        연간 구독
      </label>
    </fieldset>
  );
};
