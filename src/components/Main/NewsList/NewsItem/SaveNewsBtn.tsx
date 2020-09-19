import React, { FC } from "react";
import "../NewsItem.css";

interface Props {
  newsId: string;
}

const SaveNewsBtn: FC<Props> = ({ newsId }: Props) => {

    

  return (
    <span onClick={() => console.log("하이")}>
      <i className="fas fa-thumbtack"></i>
    </span>
  );
};

export default SaveNewsBtn;
