import React, { FC } from "react";
import "./NewsList.css";


interface Props {
    type: string;
}

const NewsList: FC<Props> = ({type}: Props) => {

  return (
    <div className="noNews">
        <span className="noNewsTitle">뉴스가 없습니다!</span>
        <img className="noNewsImg" src="/notLoad.png" alt="" />
  <span className="noNewsExp">좋아하는 {type}를 팔로우 해주세요!</span>
    </div>
  );
};

export default NewsList;
