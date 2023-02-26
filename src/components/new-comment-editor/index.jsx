import React, { useState } from "react";
import styles from "./styles.module.scss";
import TextArea from "../textarea";
import Button from "../button";

export default function NewCommentEditor({
  isReply = false,
  image,
  alt,
  onClick,
}) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleClick = () => {
    onClick(comment);
    setComment("");
  };

  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <TextArea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add a comment.."
      />
      <Button variant="primary" onClick={handleClick}>
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
}
