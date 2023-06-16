type Checkbox = {
  id?: number;
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
    <label className={style + " cursor-pointer"}>
      <input
        type="checkbox"
        id={id?.toString()}
        className="hidden"
        disabled={disabled}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      {children}
    </label>
  );
};

Checkbox.defaultProps = {
  style:
    "w-5 h-5 border border-[#D97706] text-[#D97706] flex justify-center items-center ",
};

export default Checkbox;
