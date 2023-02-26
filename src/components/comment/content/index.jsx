import React from "react";
import styles from "./styles.module.scss";
import { useComment } from "../../../hooks/comment/useComment";

export default function Content() {
  const {
    comment: { content },
  } = useComment();
  return (
    <div className={styles.content}>
      <p>{content}</p>
    </div>
  );
}
