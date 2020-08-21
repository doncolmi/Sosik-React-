import React, { FC, useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import "./PressList.css";

const NewsList: FC = () => {
    // todo: 만들어야해
    const myPressList = useState(getMyPressList());
  useEffect(() => {
    getMyPressList();
    getPressList();
  });

  const getMyPressList = () => {
    axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/news`)
    .then(({data}: AxiosResponse) => {
        
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

  if(state.isFirstPage){
    return (
        <div ref={ setTarget } className="bammm"></div>
    )
  } else if(state.isNoNews) {
    return(
      <div className="NewsList">
        {state.newsList.map((element: any) => {
          return <NewsItem data={element} key={Math.random()}/>
        })}
        {state.isLoading ? <div className="loadingBar"><img src="/loadingBar.gif" alt="loadingBar"/></div> : <div ref={ setTarget } className="bammm"></div>}
      </div>
    );
  }
  if(state.newsList.length < 1) {
    return (
      <div><NoNews type={type} /></div>
    )
  } 
  return (<></>);
  
  
};

export default NewsList;
