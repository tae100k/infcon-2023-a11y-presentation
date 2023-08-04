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

  return (
    <div className="toggle-switch">
      <input
        type="radio"
        id="monthly"
        name="subscription"
        value="monthly"
        checked={selectedOption === "monthly"}
        onChange={handlePeriodChange}
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
