import React from "react";
import { useComment } from "../../../hooks/comment/useComment";
import Button from "../../button";
import styles from "./styles.module.scss";

export default function Reactions() {
  const { comment } = useComment();
  // const {comment : {score}} = useComment(); // This is the same as the line above but better because we only need the score from the comment object

  return (
    <div className={styles.reactionsWrapper}>
      <Button aria-labelledby="Positive reaction button">
        <img
          src="./images/icon-plus.svg"
          alt="upvote button"
          aria-hidden="true"
        />
      </Button>
      <span>{comment.score}</span>
      <Button aria-labelledby="Negative reaction button">
        <img
          src="./images/icon-minus.svg"
          alt="downvote button"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
