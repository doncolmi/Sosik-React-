import React, { FC, useEffect, useState } from "react";
import "../NewsItem.css";

import axios from "axios";

interface Props {
  newsId: string;
}

const SaveNewsBtn: FC<Props> = ({ newsId }: Props) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  async function getIsSaved(newsId: string) {
    const { data } = await axios.get(
      `${process.env["REACT_APP_BACKEND_SERVER"]}/save/${newsId}`
    );
    if (typeof data === "boolean") await setIsSaved(data);
  }

  useEffect(() => {
    getIsSaved(newsId);
  }, [newsId, isSaved]);

  if (isSaved) {
    // todo: 여기 작성하세요.
  }
  return (
    <span className="saveNewsBtn" onClick={() => console.log("하이")}>
      <i className="fas fa-thumbtack"></i>
    </span>
  );
};

export default SaveNewsBtn;
