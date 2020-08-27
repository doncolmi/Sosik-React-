import React, { FC, useEffect, useState } from "react";
import { Properties } from "csstype";

import "./NewsList.css";

interface Props {
  type: string;
  isShow: boolean;
}

const NewsList: FC<Props> = ({ type, isShow }: Props) => {
  const [style, setStyle] = useState<Properties>();
  async function setNone(isShow: boolean) {
    const none = { display: "none" };
    const inherit = { display: "inherit" };
    isShow ? await setStyle(inherit) : await setStyle(none);
  }

  useEffect(() => {
    setNone(isShow);
  }, [isShow]);

  return (
    <div className="noNews" style={style}>
      <span className="noNewsTitle">뉴스가 없습니다!</span>
      <img className="noNewsImg" src="/notLoad.png" alt="" />
      <span className="noNewsExp">좋아하는 {type}를 팔로우 해주세요!</span>
    </div>
  );
};

export default NewsList;
