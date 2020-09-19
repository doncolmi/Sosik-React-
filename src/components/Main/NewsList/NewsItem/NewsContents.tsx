import React, { FC, useState, useEffect } from "react";
import "../NewsItem.css";

interface Props {
  title: string;
  pressName: string;
  topicName: string;
  fakeNews: number;
}

const NewsContents: FC<Props> = ({
  title,
  pressName,
  topicName,
  fakeNews,
}: Props) => {
  const [fake, setFake] = useState("");

  useEffect(() => {
    (async () => {
      if (fakeNews > 10)
        await setFake("!!해당 뉴스는 가짜 뉴스일 확률이 있습니다!!");
    })();
  });

  return (
    <div className="NewsContents">
      <span className="NewsTitle">{title}</span>
      <span className="pressTopic">
        {pressName} / {topicName}
      </span>
      <span className="fakeNews">{fake}</span>
    </div>
  );
};

export default NewsContents;
