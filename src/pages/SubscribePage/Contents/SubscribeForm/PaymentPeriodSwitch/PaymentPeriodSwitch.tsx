import "./PaymentPeriodSwitch.css";
interface PaymentPeriodSwitchProps {
  selectedOption: "monthly" | "yearly";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PaymentPeriodSwitch: React.FC<PaymentPeriodSwitchProps> = ({
  selectedOption,
  onChange,
}) => {
  return (
    <div className="toggle-switch">
      <input
        type="radio"
        id="monthly"
        name="subscription"
        value="monthly"
        checked={selectedOption === "monthly"}
        onChange={onChange}
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
        onChange={onChange}
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
