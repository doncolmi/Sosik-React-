import React, { FC } from "react";
import "../NewsItem.css";

interface Props {
  newsId: string;
  title: string;
}

const SaveNewsBtn: FC<Props> = ({ newsId, title }: Props) => {
  return (
    <span className="saveNewsBtn">
      <i className="fas fa-thumbtack"></i>
    </span>
  );
};

export default SaveNewsBtn;
