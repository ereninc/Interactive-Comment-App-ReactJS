import React from "react";
import styles from "./styles.module.scss";
import { clsx } from "clsx";

export default function Button({
  variant = "ghost",
  children,
  className,
  ...props
}) {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
