import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="counter-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
