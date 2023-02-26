import React from "react";
import Reactions from "./reactions";
import Header from "./header";
import Content from "./content";
import { useComment } from "../../hooks/comment/useComment";
import styles from "./styles.module.scss";

export default function Comment() {
  const comment = useComment();
  console.log(comment);
  return (
    <div className={styles.commentWrapper}>
      <Reactions />
      <div className={styles.commentContentArea}>
        <Header />
        <Content />
      </div>
    </div>
  );
}
