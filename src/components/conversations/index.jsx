import React, { useState } from "react";
import Comment from "../comment";
import NewCommentEditor from "../new-comment-editor";
import Data from "../../../data.json";
import { CommentContextProvider } from "../../hooks/comment/useComment";
import styles from "./styles.module.scss";

export default function Conversations() {
  // const comments = Data.comments;
  // console.log(comments);

  const [comments, setComments] = useState(Data.comments);

  const handleNewComment = (newComment) => {
    setComments([
      ...comments,
      {
        id: Math.floor(Math.random() * 1000),
        content: newComment,
        createdAt: "1 second ago",
        score: 0,
        user: Data.currentUser,
      },
    ]);
  };

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
      <NewCommentEditor
        onClick={handleNewComment}
        image={Data.currentUser.image.png}
        alt={Data.currentUser.username}
      />
    </div>
  );
}
