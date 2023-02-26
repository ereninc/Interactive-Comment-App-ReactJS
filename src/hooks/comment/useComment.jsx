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

  const contextData = useMemo(
    () => ({
      comment,
      currentUser: data.currentUser,
      isReplying,
      isEditing,
      onReply,
      onDelete,
      onEdit,
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
