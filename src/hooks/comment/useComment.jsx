import React, { createContext, useContext, useState, useMemo } from "react";

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {
  const [isReplying, setIsReplying] = useState(false);
  const [comment, setComment] = useState(data.comment);
  const [isEditing, setIsEditing] = useState(false);

  const onReply = () => {
    setIsReplying(!isReplying);
  };

  const onDelete = () => {
    setComment(null);
    console.log("deleted");
  };

  const onEdit = () => {
    setIsEditing(!isEditing);
    console.log("edited");
  };

  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
      createdAt: "Edited 1 second ago",
    });
    setIsEditing(false);
  };

  const onNewReply = (newReply) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: Math.floor(Math.random() * 1000),
          content: newReply,
          // createdAt: new Date().toLocaleDateString(),
          createdAt: "1 second ago",
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    setIsReplying(false);
  };

  const onPositiveVote = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };

  const onNegativeVote = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      comment,
      currentUser: data.currentUser,
      isReplying,
      isEditing,
      onReply,
      onDelete,
      onEdit,
      onUpdate,
      onNewReply,
      onPositiveVote,
      onNegativeVote,
    }),
    [isReplying, isEditing, comment]
  );

  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  const context = useContext(CommentContext);
  if (context === undefined) {
    throw new Error("useComment must be used within a CommentContextProvider");
  }
  return context;
}

export { CommentContextProvider, useComment };
