import React from "react";
import styles from "./styles.module.scss";

export default function TextArea({ ...props }) {
  return <textarea className={styles.textarea} rows={4} {...props} />;
}
