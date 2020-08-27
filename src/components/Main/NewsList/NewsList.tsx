import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import "./NewsList.css";

import NewsItem from "./NewsItem";
import NoNews from "./NoNews";

export enum Types {
  PRESS = "언론사",
  TOPIC = "주제",
  ALL = "All",
  ONLYPRESS = "해당 언론사",
  ONLYTOPIC = "해당 주제",
}

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
  type: Types;
  name?: string;
}

const NewsList: FC<Props> = ({ type, name }: Props) => {
  const getUrl = (type: Types): string => {
    if (type === Types.PRESS) return "news/press";
    else if (type === Types.TOPIC) return "news/topic";
    else if (type === Types.ONLYPRESS) return `news/press/${name}`;
    else if (type === Types.ONLYTOPIC) return `news/topic/${name}`;
    return "news";
  };

  const reset = async () => {
    await setUrl(getUrl(type));
    await setNewsList(null);
    await setLastNews(undefined);
    await setIsEnd(false);
    await setIsFirstPage(true);
    await setIsLoading(true);
    await setNoNews(false);
  };

  const [url, setUrl] = useState<string>(getUrl(type));
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [lastNews, setLastNews] = useState<News>();
  const [newsList, setNewsList] = useState<any>();
  const [isEnd, setIsEnd] = useState<any>(false);
  const [noNews, setNoNews] = useState(false);

  const [target, setTarget] = useState();

  useEffect(() => {
    if (url !== getUrl(type)) reset();
    let observer: IntersectionObserver;
    if (target && !isEnd) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
      observer.observe(target);
    }
    return () => {
      observer && observer.disconnect();
    };
  }, [target, type, noNews]);

  const onIntersect: IntersectionObserverCallback = async ([entry]) => {
    if (entry.isIntersecting) {
      if (isFirstPage && !isEnd) {
        await setIsFirstPage(false);
        await getNews();
      } else if (!isFirstPage) {
        await addNewsList();
      }
    }
  };

  const getNews = async () => {
    await setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/${url}`
      );
      if (data.length > 9) {
        await setLastNews(data[data.length - 1]);
        await setNewsList(data);
        await setIsLoading(false);
      } else if (data.length > 0 && data.length < 10) {
        await setIsEnd(true);
        await setNewsList(data);
        await setIsLoading(false);
      }
    } catch (e) {
      await setIsEnd(true);
      await setIsLoading(false);
      await setNoNews(true);
    }
  };

  const addNewsList = async () => {
    await setIsLoading(true);
    if (lastNews) {
      const { data } = await axios.get(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/${url}?date=${
          lastNews!.createdDate
        }`
      );
      if (data.length > 9) {
        await setLastNews(data[data.length - 1]);
        await setNewsList(newsList.concat(data));
        await setIsLoading(false);
      } else if (data.length > 0 && data.length < 10) {
        await setIsEnd(true);
        await setNewsList(newsList.concat(data));
        await setIsLoading(false);
      }
    }
  };

  if (isLoading && isFirstPage) {
    return (
      <div>
        <img src="/loadingBar.gif" alt="Hello" />
        <div ref={setTarget} className="bammm"></div>;
      </div>
    );
  } else if (newsList) {
    return (
      <div className="NewsList">
        {newsList.map((element: any) => {
          return <NewsItem data={element} key={Math.random()} />;
        })}
        {isLoading ? (
          <div className="loadingBar">
            <img src="/loadingBar.gif" alt="loadingBar" />
          </div>
        ) : (
          <div ref={setTarget} className="bammm"></div>
        )}
        {isEnd && <div> 마지막 페이지 입니다. </div>}
      </div>
    );
  }
  return (
    <>
      <NoNews type={type} isShow={noNews} />;
    </>
  );
};

export default NewsList;
