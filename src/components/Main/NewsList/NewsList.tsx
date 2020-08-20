import React, { FC, useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import "./NewsList.css";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../modules';
import { setIsFirstPage, setIsNoNews, setIsLoading, addNews, setLastNews } from '../../../modules/news';

import NewsItem from "./NewsItem";
import NoNews from "./NoNews";

export enum Types {
    PRESS = "언론사",
    TOPIC = "주제",
    ALL = "All",
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
}

const NewsList: FC<Props> = ({type}: Props) => {


  const [target, setTarget] = useState();

  const state = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch();

  const doSetIsNoNews = (bool: boolean) => {
    dispatch(setIsNoNews(bool));
  }
  const doSetIsFirstPage = (bool: boolean) => {
    dispatch(setIsFirstPage(bool));
  }
  const doSetIsLoading = (bool: boolean) => {
    dispatch(setIsLoading(bool));
  }
  const doAddNews = (news: any) => {
    dispatch(addNews(news));
  }
  const doSetLastNews = (news: any) => {
    dispatch(setLastNews(news));
  }


  useEffect(() => {
    let observer: IntersectionObserver;
    console.log(target);
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [ target, state ]);

  const onIntersect:IntersectionObserverCallback = ([entry]) => {
    console.log(state.newsList);
    console.log(state.lastNews);
    if(entry.isIntersecting && !state.isLoading) {
        if(state.isFirstPage) {
          doSetIsFirstPage(false);
          getNews();
        } else if(state.lastNews && !state.isFirstPage) {
          addNewsList();
        }
        
    }
  };

  const getNews = () => {
    axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/news`)
    .then(({data}: AxiosResponse) => {
      doSetLastNews(data[data.length - 1]);
      doAddNews(data);
      doSetIsLoading(false);

    })
  }

  const addNewsList = () => {
    doSetIsLoading(true);
    axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/news?date=${state.lastNews.createdDate}`)
      .then(({data}: AxiosResponse) => {
      doSetLastNews(data[data.length - 1]);
      doAddNews(data);
      doSetIsLoading(false);
    })
  }

  if(state.isNoNews) {
    return(
      <div className="NewsList">
        {state.newsList.map((element: any) => {
          return <NewsItem data={element} key={Math.random()}/>
        })}
        {state.isLoading ? <div className="loadingBar"><img src="/loadingBar.svg" alt="loadingBar"/></div> : <div ref={ setTarget } className="bammm"></div>}
      </div>
    );
  }
  return (
    <div><NoNews type={type} /></div>
  )
  
  
};

export default NewsList;
