type Checkbox = {
  id?: string;
  style: string;
  children: React.ReactNode;
  disabled: boolean;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({
  id,
  style,
  children,
  disabled,
  checked,
  onChange,
}: Checkbox) => {
  return (
    <label className={style}>
      <input
        type="checkbox"
        id={id}
        className="hidden"
        disabled={disabled}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      {children}
    </label>
  );
};

export default Checkbox;
