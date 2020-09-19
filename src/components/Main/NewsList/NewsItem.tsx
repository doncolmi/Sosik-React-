import React, { FC } from "react";
import "./NewsItem.css";

import { News } from "./NewsList";
import { useDispatch } from "react-redux";
import { setIsView, setNewsData } from "../../../modules/news";

import NewsPicture from "./NewsItem/NewsPicture";
import NewsInfo from "./NewsItem/NewsInfo";
import NewsContents from "./NewsItem/NewsContents";

interface Props {
  data: News;
}
const NewsItem: FC<Props> = ({ data }: Props) => {
  const { newsId, fakeNews, title, topicName, pressName, createdDate, contents } = data;

  const dispatch = useDispatch();

  const doSetIsView = (bool: boolean) => {
    dispatch(setIsView(bool));
  };
  const doSetNewsData = (data: News) => {
    dispatch(setNewsData(data));
  };

  async function getModal(data: News) {
    await doSetNewsData(data);
    await doSetIsView(true);
  }

  return (
    <div>
      <div className="NewsItem" onClick={() => getModal(data)}>
        <NewsPicture contents={contents} />
        <NewsContents
          title={title}
          pressName={pressName}
          topicName={topicName}
          fakeNews={fakeNews}
        />
        <NewsInfo createdDate={createdDate} newsId={newsId} />
      </div>
      <hr />
    </div>
  );
};

export default NewsItem;
