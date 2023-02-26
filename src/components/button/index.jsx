import React from "react";
import styles from "./styles.module.scss";

export default function Button({ variant = "ghost", children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
