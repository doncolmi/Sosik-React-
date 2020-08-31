import React, { FC } from "react";
import "./TopicItem.css";

interface Props {
  icon: string;
  data: any;
  exp: string;
}

const TopicItem: FC<Props> = ({ icon, data, exp }: Props) => {
  return (
    <div className="tItem">
      <div className="napkin"></div>
      <span>
        <i className={icon}></i>
      </span>
      <div className="tData">{data}</div>
      <div className="tDescription">{exp}</div>
    </div>
  );
};

export default TopicItem;
