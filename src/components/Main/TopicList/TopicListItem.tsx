import React, { FC } from "react";
import "./TopicListItem.css";
import TopicFollow from "./TopicFollow";
import { Link } from "react-router-dom";
import { Properties } from "csstype";

interface Props {
  name: string;
  id: string;
  url: string;
  isFollow: boolean;
  imgUrl: string;
}

const TopicListItem: FC<Props> = ({
  name,
  id,
  url,
  isFollow,
  imgUrl,
}: Props) => {
  function setImage(imgUrl: string): Properties {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center center`,
    };
  }

  return (
    <div className="Topic">
      <Link to={url} className="TopicImg" style={setImage(imgUrl)}></Link>
      <div className="TopicInfo">
        <div className="TopicName">
          <Link to={url}>{name}</Link>
        </div>
        <TopicFollow isFollow={isFollow} topicId={id} name={name} />
      </div>
    </div>
  );
};

export default TopicListItem;
