import React, { FC } from "react";
import "./TopicTop.css";

import { useGetRequest } from "../../../../hooks/useRequest";

import TopicFollow from "../TopicFollow";

interface Props {
  name: string;
}

const TopicTop: FC<Props> = ({ name }: Props) => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_BACKEND_SERVER"]}/topic/${name}/follow`
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  if (!response) return null;

  function getTopicId(name: string): string {
    if (name === "정치") return "100";
    if (name === "경제") return "101";
    if (name === "사회") return "102";
    if (name === "생활") return "103";
    if (name === "IT") return "105";
    return "110";
  }
  return (
    <div className="tTop">
      <TopicFollow
        isFollow={response.data}
        topicId={getTopicId(name)}
        name={name}
      />
      <div className="tSmall">주제</div>
      <div className="tName">{name}</div>
    </div>
  );
};

export default TopicTop;
