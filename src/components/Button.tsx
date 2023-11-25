import React from "react";

interface IButton extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  disabled: boolean;
}
const Button: React.FC<IButton> = ({ children, disabled, ...rest }) => {
  return (
    <button
      className={`flex w-9/12 md:w-40 mx-auto text-white bg-bluePrimary rounded-md px-10 py-2 ${
        disabled ? "opacity-80" : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
