import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Input(props) {
  const {
    type,
    placeholder,
    styled,
    id,
    checked: initialChecked = false,
  } = props;
  const [checked, setChecked] = useState(initialChecked);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <input
      type={type}
      name=""
      checked={checked}
      onChange={handleChange}
      id={id}
      placeholder={placeholder}
      className={twMerge(`py-2 border rounded-md px-3`, styled)}
    />
  );
}
