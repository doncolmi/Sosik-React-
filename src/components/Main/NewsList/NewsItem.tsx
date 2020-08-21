import React, { FC, useState, useEffect } from "react";
import {Properties} from 'csstype';
import { News } from "./NewsList";
import "./NewsItem.css";

import { load } from "cheerio";

interface Props {
  data: News;
}
const NewsItem: FC<Props> = (({data}: Props) => {
  const [fake, setFake] = useState("");

  const {fakeNews, title, topicName, pressName, createdDate} = data;

  if(fakeNews > 10) {
    setFake("!!해당 뉴스는 가짜 뉴스일 확률이 있습니다!!");
  }

  function setImage(contents: string): Properties  {
    const $ = load(contents);
    const img: string = $("img").attr("src") || "/noImg.png";
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center center`,
    }
  }

  function simpleDate(createdDate: string): any {
    const now: number = new Date().getTime();
    const date: number = new Date(createdDate).getTime();
    let diff: number = (now - date) / 1000;

    if (diff < 0) diff = 0;
    let day_diff: number = Math.floor(diff / 86400);
    if (isNaN(day_diff) || day_diff < 0) return;

    return (
      (day_diff === 0 &&
        ((diff < 60 && "방금전") ||
          (diff < 120 && "1분전") ||
          (diff < 3600 && Math.floor(diff / 60) + " 분전") ||
          (diff < 7200 && "1시간전") ||
          (diff < 86400 && Math.floor(diff / 3600) + " 시간전"))) ||
      (day_diff === 1 && "어제") ||
      (day_diff < 7 && day_diff + " 일전") ||
      (day_diff < 31 && Math.floor(day_diff / 7) + " 주전") ||
      (day_diff < 360 && Math.floor(day_diff / 30) + " 개월 전") ||
      (day_diff >= 360 &&
        (Math.floor(day_diff / 360) === 0 ? 1 : Math.floor(day_diff / 360)) +
          " 년 전")
    );

  }

  return (
    <div>
        <div className="NewsItem" >
            <div className="NewsPicture" style={setImage(data.contents)}>
            </div>
            <div className="NewsContents">
                <span className="NewsTitle">{title}</span>
                <span className="pressTopic">{pressName} / {topicName}</span>
                <span className="fakeNews">{fake}</span>
            </div>
            <div className="NewsInfo">
              <div><span className="date">{simpleDate(createdDate)}</span></div>
              <div className="saveNews"><span onClick={() => console.log("하이")}><i className="fas fa-thumbtack"></i></span></div>
            </div>
        </div>
        <hr />
    </div>
  );
});

export default NewsItem;
