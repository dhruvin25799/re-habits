import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
  disabled? : boolean
};

export const Button = ({ children, onClick, type, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles["button"]} ${type && styles[type]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
