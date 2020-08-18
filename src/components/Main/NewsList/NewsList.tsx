import React, { FC, useState, useEffect } from "react";
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
  const [noNews, setNoNews] = useState(null);
  let [hello, setHello] = useState([]);

  useEffect(() => {
    getNews();
  }, [])

  const getNews = () => {axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/news?page=${page}`)
  .then(({data}: AxiosResponse) => {
    setHello(data);
    setIsLoading(true);
  })};


  if(isLoading) {
    return(
      <div className="NewsList">
        {hello.map(element => {
          return <NewsItem data={element} key={Math.random()}/>
        })}
      </div>
    );
  }

  return (
    <div><NoNews type={type} /></div>
  )
};

export default NewsList;
