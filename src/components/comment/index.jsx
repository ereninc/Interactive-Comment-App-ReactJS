import React, { useState } from "react";
import Reactions from "./reactions";
import Header from "./header";
import Content from "./content";
import {
  useComment,
  CommentContextProvider,
} from "../../hooks/comment/useComment";
import styles from "./styles.module.scss";
import NewCommentEditor from "../new-comment-editor";

export default function Comment() {
  const { isReplying, currentUser, comment } = useComment();

  if (!comment) {
    return null;
  }

  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.commentContentArea}>
          <Header />
          <Content />
        </div>
      </div>

      {comment?.replies?.length > 0 && (
        <div className={styles.repliesWrapper}>
          {comment.replies.map((reply) => {
            return (
              <CommentContextProvider
                data={{ comment: reply, currentUser: currentUser }}
                key={reply.id}
              >
                <Comment />
              </CommentContextProvider>
            );
          })}
        </div>
      )}
      {isReplying && (
        <NewCommentEditor
          isReply={true}
          image={currentUser.image.png}
          alt={currentUser.usename}
        />
      )}
    </>
  );
}
