import React, { FC } from "react";
import "./NewsList.css";

const NewsList: FC = () => {

  return (
    <div className="NewsList">
        <div className="NewsItem">
            <div className="NewsPicture">
            </div>
            <div className="NewsContents">
                <span className="NewsTitle">뉴스 기사 제목입니다.</span>
                <span className="pressTopic">조선비즈 / 정치</span>
            </div>
            <div className="NewsInfo">
                <span className="date">2020년 8월 11일</span>
            </div>
        </div>
        <div className="NewsItem">
            <div className="NewsPicture">
            </div>
            <div className="NewsContents">
                <span className="NewsTitle">뉴스 기사 제목입니다.</span>
                <span className="pressTopic">조선비즈 / 정치</span>
            </div>
            <div className="NewsInfo">
                <span className="date">2020년 8월 11일</span>
            </div>
        </div>
    </div>
  );
};

export default NewsList;
