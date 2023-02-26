import React from "react";
import styles from "./styles.module.scss";
import { useComment } from "../../../hooks/comment/useComment";

export default function Content() {
  const {
    comment: { content, replyingTo },
  } = useComment();

  return (
    <div className={styles.content}>
      <p>
        {replyingTo && (
          <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>
        )}
        {content}
      </p>
    </div>
  );
}
