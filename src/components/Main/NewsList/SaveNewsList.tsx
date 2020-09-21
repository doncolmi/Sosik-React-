import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import "./NewsList.css";

import NewsItem from "./NewsItem";
import NoNews from "./NoNews";
import LoadingBar from "../../Util/Loading/LoadingBar";
import LastDiv from "../../Util/LastDiv/LastDiv";

export interface News {
  _id?: string;
  fakeNews: number;
  newsId: string;
  title: string;
  contents: string;
  newsDate?: string;
  href: string;
  pressId: string;
  pressName: string;
  topicName: string;
  createdDate: string;
  modifiedDate: string;
}

interface Props {
  name?: string;
}

const SaveNewsList: FC<Props> = ({ name }: Props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState<number>(0);
  const [newsList, setNewsList] = useState<any>([]);
  const [isEnd, setIsEnd] = useState<any>(false);
  const [noNews, setNoNews] = useState(false);

  const [target, setTarget] = useState();

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && !isEnd) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
      observer.observe(target);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [target, noNews, isEnd]);

  const onIntersect: IntersectionObserverCallback = async ([entry]) => {
    if (entry.isIntersecting) {
        await addNewsList(page);
    }
  };

  const addNewsList = async (page: number) => {
    await setIsLoading(true);
    try {
      const { data } = await axios.get(
      `${process.env["REACT_APP_BACKEND_SERVER"]}/save?page=${page}`
      );
      if (data.length > 9) {
          await setNewsList(newsList.concat(data));
          await setIsLoading(false);
      } else if (data.length > 0 && data.length < 10) {
          await setIsEnd(true);
          await setNewsList(newsList.concat(data));
          await setIsLoading(false);
      }
      await setPage(page + 1);
    } catch (e) {
      console.log(e.message);
      await setIsEnd(true);
      await setIsLoading(false);
      await setNoNews(true);
    }
  };

  const loadDiv = <div ref={setTarget} className="bammm"></div>;

  if (isLoading && page < 1) {
    return (
      <div>
        <LoadingBar />
        {loadDiv}
      </div>
    );
  } else if (newsList.length > 0) {
    return (
      <div className="NewsList">
        {newsList.map((element: any) => (
          <NewsItem data={element} key={Math.random()} />
        ))}
        {isLoading ? <LoadingBar /> : loadDiv}
        {isEnd && <LastDiv />}
      </div>
    );
  }
  return <NoNews type={"뉴스"} isShow={noNews} />;
};

export default SaveNewsList;
