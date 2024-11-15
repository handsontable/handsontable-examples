type Props = {
  name: string;
  items: { id: string; value: string; label: string }[];
  selectedValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Switch = ({ name, items, selectedValue, onChange }: Props) => (
  <div className="switch-btn-wrapper">
    {items.map(({ id, label, value }) => (
      <div className="switch-btn" key={id}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={value === selectedValue}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    ))}
  </div>
);

export default Switch;
