import React, { FC, useState, useEffect, useRef } from "react";
import axios, { AxiosResponse } from 'axios';
import "./NewsList.css";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../modules';
import { setIsFirstPage, setIsNoNews } from '../../../modules/news';

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
  // const target = useRef<HTMLDivElement>(null);

  // let isFirst: boolean = true;
  // let lastNews: any;
  // let datas:any = [];
  // const [isLoading, setIsLoading] = useState(false);
  // const [noNews, setNoNews] = useState(null);


  // const getNews = () => {
  //   return new Promise((resolve, reject) => {
  //     isFirst = false;
  //     setIsLoading(true);
  //     axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/news`)
  //     .then(({data}: AxiosResponse) => {
  //       datas = datas.concat(data);
  //       lastNews = data[data.length - 1];
  //       setIsLoading(false);
  //       resolve(true);
  //       console.log(datas);
  //     }).catch(err => console.log(err));
  //   })
  // }

  // const addNews = () => {
  //   return new Promise((resolve, reject) => {
  //     setIsLoading(true);
  //     axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/news?date=${lastNews.createdDate}`)
  //     .then(({data}: AxiosResponse) => {
  //       datas = datas.concat(data);
  //       console.log(datas);
  //       lastNews = data[data.length - 1];
  //       setIsLoading(false);
  //       resolve(true);
  //     }).catch(err => console.log(err));
  //   })
  // }

  
  // useEffect(() => {
  //   let observer: IntersectionObserver;
  //   getNews().then((res) => {
  //     if (target.current) {
  //       observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
  //       observer.observe(target.current);
  //     }
  //   })
  //   return () => observer && observer.disconnect();
  // }, [ target ])

  // const _onIntersect:IntersectionObserverCallback = ([entry]) => {
  //   if(entry.isIntersecting) {
  //     console.log("발견", isFirst)
  //       if(!isFirst) {
  //         addNews()
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         })
  //       }
  //   }
  // };

  // if(datas) {
  //   return(
  //     <div className="NewsList">
  //       {datas.forEach((element: any) => {
  //           return <NewsItem data={element} key={Math.random()}/>
  //         })}
  //       {datas.map((element: any) => {
  //         return <NewsItem data={element} key={Math.random()}/>
  //       })}
  //       {isLoading ? <div>loading...</div> :  <div ref={target}></div>}
  //     </div>
  //   );
  // }
  const news = useSelector((state: RootState) => state.news.isFirstPage);
  const dispatch = useDispatch();

  console.log(news);

  return (
    <div><NoNews type={type} /></div>
  )
};

export default NewsList;
