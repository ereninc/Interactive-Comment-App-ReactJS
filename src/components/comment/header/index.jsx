import React from "react";
import styles from "./styles.module.scss";
import Button from "../../button";
import { useComment } from "../../../hooks/comment/useComment";

export default function Header() {
  const {
    comment: {
      createdAt,
      user: {
        image: { png },
        username,
      },
    },
    currentUser,
  } = useComment();

  const isCurrentUser = currentUser.username === username;

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.imageWrapper}>
        <img src={png} alt="Michelle" />
      </div>
      <h3 className={styles.username}>{username}</h3>
      {isCurrentUser && <span className={styles.youIndicator}>YOU</span>}
      <span className={styles.createdAt}>{createdAt}</span>
      <div className={styles.actionButtons}>
        {isCurrentUser ? (
          <>
            <Button variant="warning">
              <img
                src="./images/icon-delete.svg"
                alt="Delete"
                aria-hidden="true"
              />{" "}
              Delete
            </Button>
            <Button>
              <img src="./images/icon-edit.svg" alt="Edit" aria-hidden="true" />{" "}
              Edit
            </Button>
          </>
        ) : (
          <Button>
            <img src="./images/icon-reply.svg" alt="Reply" aria-hidden="true" />{" "}
            Reply
          </Button>
        )}
      </div>
    </div>
  );
}
