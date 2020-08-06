import React, { FC } from "react";
import "../../../css/Main.css";

import Block from "../../Util/Block/Block";

const Middle: FC = () => {
  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexCenter blueGray">
          <div className="blockTitle">소식이란?</div>
          <div className="blockExp">여러분 반갑습니다.</div>
          <hr />
          <div className="blockBox flexCenter">
          </div>
      </div>
    </div>
  );
};

export default Middle;
