import React, { FC } from "react";
import { useGetRequest } from "../../../hooks/useRequest";
import "./TopicList.css";

import TopicListItem from "./TopicListItem";

const TopicList: FC = () => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_BACKEND_SERVER"]}/topic`
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  if (!response) return null;

  const topicFollowList: any = response.data;

  function getIsFollow(name: string): boolean {
    return topicFollowList.includes(name);
  }

  return (
    <div className="TopicListWrapper">
      <div className="TopicList">
        <TopicListItem
          name="정치"
          id="100"
          url="/topic/정치"
          isFollow={getIsFollow("정치")}
          imgUrl="/Topic/poli.jpg"
        />
        <TopicListItem
          name="경제"
          id="101"
          url="/topic/경제"
          isFollow={getIsFollow("경제")}
          imgUrl="/Topic/fina.jpg"
        />
        <TopicListItem
          name="사회"
          id="102"
          url="/topic/사회"
          isFollow={getIsFollow("사회")}
          imgUrl="/Topic/soci.jpg"
        />
      </div>
      <div className="TopicList">
        <TopicListItem
          name="생활"
          id="103"
          url="/topic/생활"
          isFollow={getIsFollow("생활")}
          imgUrl="/Topic/life.jpg"
        />
        <TopicListItem
          name="IT"
          id="105"
          url="/topic/IT"
          isFollow={getIsFollow("IT")}
          imgUrl="/Topic/it.png"
        />
        <TopicListItem
          name="오피니언"
          id="110"
          url="/topic/오피니언"
          isFollow={getIsFollow("오피니언")}
          imgUrl="/Topic/opin.jpg"
        />
      </div>
    </div>
  );
};

export default TopicList;
