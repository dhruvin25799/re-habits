import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
};

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles["button"]} ${type && styles[type]}`}
    >
      {children}
    </button>
  );
};
