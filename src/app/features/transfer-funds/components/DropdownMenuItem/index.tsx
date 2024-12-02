import styles from "./index.module.scss";

export type DropdownMenuItemProps = {
  children?: React.ReactNode;
  defaultValue: string;
  id: string;
  name: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
};

export function DropdownMenuItem({
  children,
  defaultValue,
  id,
  name,
  value,
  label,
  onChange,
}: DropdownMenuItemProps) {
  return (
    <label htmlFor={value} className={styles.button}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={defaultValue === value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
      <div className={styles.label}>{label}</div>
      {children}
    </label>
  );
}
