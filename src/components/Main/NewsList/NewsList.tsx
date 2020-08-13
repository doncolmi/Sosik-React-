import React, { FC, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import "./NewsList.css";

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
  topicName: string;
  createdDate: string;
  modifiedDate: string;
}

interface Props {
    type: Types;
}

const NewsList: FC<Props> = ({type}: Props) => {

  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [noNews, setNoNews] = useState(false);
  let [newsList , setNewsList]: any = useState();

  const getNewsList = ((typeParam: Types) => {
        axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/news?page=${page}`)
        .then(({ data }: AxiosResponse) => {
          console.log(data);
          // const News: News[] = data;
          // let elements: any;
          // News.forEach((element: News) => {
          //   setNewsList(newsList += element);
          // });
          // return elements;
        })
  })
  getNewsList(type);

  console.log(newsList);

    // todo: 뉴스 목록을 가져오라는 메소드 작성

  return (
    <div className="NewsList"> b 
        {newsList.map(((element: any) => (
          <NewsItem data={element} key={Math.random()}/>
          )))}
    </div>
  );
};

export default NewsList;
