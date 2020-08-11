import React, { FC } from "react";
import "./NewsList.css";

import NewsItem from "./NewsItem";
import NoNews from "./NoNews";

export enum Types {
    PRESS = "Press",
    TOPIC = "Topic",
    ALL = "All",
}

interface Props {
    type: Types;
}

const NewsList: FC<Props> = ({type}: Props) => {

    // todo: 뉴스 목록을 가져오라는 메소드 작성

  return (
    <div className="NewsList">
        <NoNews type="언론사" />
    </div>
  );
};

export default NewsList;
