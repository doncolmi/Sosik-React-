import React, { SFC } from "react";
import "./Topic.css";
import { RouteComponentProps } from "react-router";
import { useGetRequest } from "../../../../hooks/useRequest";

import NewsList, { Types } from "../../NewsList/NewsList";
import TopicTop from "./TopicTop";
import TopicItem from "./TopicItem";

interface MatchParams {
  name: string;
}

const Topic: SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { name } = match.params;

  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_BACKEND_SERVER"]}/topic/${name}`
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  if (!response) return null;
  const { followCnt, newsCnt, recentPress } = response.data;

  return (
    <div className="TopicComponentWrapper">
      <div className="TopicComponent">
        <TopicTop name={name} />
        <div className="tInfo">
          <TopicItem
            icon="fas fa-thumbs-up"
            data={followCnt + "명"}
            exp="이 주제를 팔로우 하는 사람들"
          />
          <TopicItem
            icon="fas fa-newspaper"
            data={newsCnt + "개"}
            exp="이 주제로 쓰여진 기사 개수"
          />
          <TopicItem
            icon="fas fa-building"
            data={recentPress + "곳"}
            exp="최근 이 주제를 다룬 언론사 개수"
          />
        </div>
      </div>
      <NewsList type={Types.ONLYTOPIC} name={name} />
    </div>
  );
};

export default Topic;
