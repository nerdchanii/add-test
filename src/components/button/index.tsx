import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  outlined?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  outlined = false,
  icon,
  children,
}) => {
  return (
    <button className={`button ${variant} ${outlined ? "outlined" : ""}`}>
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
