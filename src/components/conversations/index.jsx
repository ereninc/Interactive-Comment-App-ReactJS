import React from "react";
import Comment from "../comment";
import NewCommentEditor from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentContextProvider } from "../../hooks/comment/useComment";
import styles from "./styles.module.scss";

export default function Conversations() {
  const comments = Data.comments;
  console.log(comments);

  return (
    <div className={styles.conversationWrapper}>
      {comments.map((comment) => {
        return (
          <CommentContextProvider
            data={{ comment, currentUser: Data.currentUser }}
            key={comment.id}
          >
            <Comment />
          </CommentContextProvider>
        );
      })}
      <NewCommentEditor />
    </div>
  );
}
