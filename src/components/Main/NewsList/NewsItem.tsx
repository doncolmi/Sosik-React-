import React, { FC } from "react";
import "./NewsItem.css";

const NewsItem: FC = () => {

  return (
    <div>
        <div className="NewsItem">
            <div className="NewsPicture">
            </div>
            <div className="NewsContents">
                <span className="NewsTitle">뉴스 기사 제목입니다.</span>
                <span className="pressTopic">조선비즈 / 정치</span>
                <span className="fakeNews">!!해당 뉴스는 가짜 뉴스일 확률이 있습니다!!</span>
            </div>
            <div className="NewsInfo">
                <span className="date">2020년 8월 11일</span>
            </div>
        </div>
        <hr />
    </div>
  );
};

export default NewsItem;
