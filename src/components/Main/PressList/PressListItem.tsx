import React, { FC } from "react";
import "./PressListItem.css";

import PressFollow from "./PressFollow";
import PressName from "./PressName";
import PressNum from "./PressNum";

interface Props {
  data?: any;
  num?: number;
  isFollow: boolean;
}

const PressListItem: FC<Props> = ({ data, num, isFollow }: Props) => {
  // if top is true
  if (!data) {
    return (
      <div className="PressListItem">
        <div className="PressListTop">
          <span className="PressListTopSpan">순번</span>
        </div>
        <div className="PressListNameTop">
          <span className="PressListTopSpan">이름</span>
        </div>
        <div className="PressListFollowTop">
          <span className="PressListTopSpan">팔로우</span>
        </div>
      </div>
    );
  }

  return (
    <div className="PressListItem">
      <PressNum num={num!} />
      <PressName name={data.pressName} />
      <PressFollow isFollow={isFollow} pressId={data.pressId} />
    </div>
  );
};

export default PressListItem;
