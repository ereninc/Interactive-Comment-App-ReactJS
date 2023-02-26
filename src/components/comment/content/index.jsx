import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useComment } from "../../../hooks/comment/useComment";
import Textarea from "../../textarea";
import Button from "../../button";

export default function Content() {
  const {
    comment: { content, replyingTo },
    isEditing,
    onUpdate,
  } = useComment();

  const [comment, setComment] = useState(content);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleUpdate = () => {
    onUpdate(comment);
  };

  return (
    <div className={styles.content}>
      {isEditing ? (
        <>
          <Textarea rows={4} value={comment} onChange={handleCommentChange} />
          <Button
            className={styles.updateButton}
            variant="primary"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </>
      ) : (
        <p>
          {replyingTo && (
            <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>
          )}
          {content}
        </p>
      )}
    </div>
  );
}
