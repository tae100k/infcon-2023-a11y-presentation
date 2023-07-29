import {useState} from "react";
import "./PaymentPeriodSwitch.css";

export const PaymentPeriodSwitch = () => {
  const [selectedOption, setSelectedOption] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as "monthly" | "yearly";
    setSelectedOption(value);
  };

  return (
    <div className="toggle-switch">
      <input
        type="radio"
        id="monthly"
        name="subscription"
        value="monthly"
        checked={selectedOption === "monthly"}
        onChange={handleChange}
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
        onChange={handleChange}
      />
      <label
        htmlFor="yearly"
        className={`option ${selectedOption === "yearly" ? "selected" : ""}`}
      >
        연간 구독
      </label>
    </div>
  );
};
