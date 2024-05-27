import { twMerge } from "tailwind-merge";
const Button = (props) => {
  const { children, styled, onclick, disabled } = props;
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={twMerge(
        `text-white bg-primary py-3 w-32 text-center rounded-xl font-semibold hover:bg-[#213526]`,
        styled
      )}
    >
      {children}
    </button>
  );
};

export default Button;
