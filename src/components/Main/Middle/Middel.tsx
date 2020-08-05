import React, { FC } from "react";
import "../../../css/Main.css";

import Login from "./SignBlock/Login";

const Middle: FC = () => {
  return (
    <div className="wrapper section ">
      <div className="contents w100h100 flexColumn flexCenter blueGray">
        <div className="sign shawdow flexCenter">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Middle;
