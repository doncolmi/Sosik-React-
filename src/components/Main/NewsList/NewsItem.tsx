import React, { FC, useState } from "react";
import { News } from "./NewsList";
import "./NewsItem.css";

interface Props {
  data: News;
}
const NewsItem: FC<Props> = ({data}: Props) => {
  const [fake, setFake] = useState("");

  if(data.fakeNews > 10) {
    setFake("!!해당 뉴스는 가짜 뉴스일 확률이 있습니다!!");
  }

  const date = new Date(data.createdDate);
  console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);

  return (
    <div>
        <div className="NewsItem">
            <div className="NewsPicture">
            </div>
            <div className="NewsContents">
                <span className="NewsTitle">{data.title}</span>
                <span className="pressTopic">{data.pressId} / {data.topicName}</span>
                <span className="fakeNews">{fake}</span>
            </div>
            <div className="NewsInfo">
                <span className="date">{data.createdDate}</span>
            </div>
        </div>
        <hr />
    </div>
  );
};

export default NewsItem;
