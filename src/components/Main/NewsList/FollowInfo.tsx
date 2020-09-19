import React, { FC, useEffect, useState } from "react";
import "./FollowInfo.css";

import axios from "axios";
import { Types } from "./NewsList";

interface Props {
  type: Types;
}

const FollowInfo: FC<Props> = ({ type }: Props) => {
  const [list, setList] = useState<any>();

  async function getFollow(type: Types) {
    let href;
    if (type === Types.PRESS) href = "press";
    else if (type === Types.TOPIC) href = "topic";
    else return;
    const { data } = await axios.get(
      `${process.env["REACT_APP_BACKEND_SERVER"]}/news/${href}/name`
    );
    await setList(data);
  }

  useEffect(() => {
    getFollow(type);
  }, [type]);

  if (list) {
    return (
      <>
        <div>
          <span className="infoTitle">내가 팔로우 하고 있는 {type}</span>
        </div>
        <div className="infoItemWrapper">
          {list.map((element: any) => (
            <span className="infoItem">{element}</span>
          ))}
        </div>
      </>
    );
  } else return <></>;
};

export default FollowInfo;
