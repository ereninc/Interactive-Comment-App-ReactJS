import React from "react";
import Reactions from "./reactions";
import Header from "./header";
import Content from "./content";
import {
  useComment,
  CommentContextProvider,
} from "../../hooks/comment/useComment";
import styles from "./styles.module.scss";

export default function Comment() {
  const {
    currentUser,
    comment: { replies },
  } = useComment();

  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.commentContentArea}>
          <Header />
          <Content />
        </div>
      </div>

      {replies?.length > 0 && (
        <div className={styles.repliesWrapper}>
          {replies.map((reply) => {
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
    </>
  );
}
