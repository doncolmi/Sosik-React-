import React, { FC } from "react";
import "./LoadingBar.css";

const LoadingBar: FC = () => {
  return (
    <div className="loadingBar">
        <img src="/loadingBar.gif" alt="loadingBar" />
    </div>
  );
};

export default LoadingBar;
