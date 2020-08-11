import React, { FC } from "react";
import "./Float.css";

const Float: FC = () => {
  return (
    <div className="Floatting">
        <div className="activeMenu">언론사 기준 뉴스피드</div>
        <div>주제 기준 뉴스피드</div>
        <div>전체 기사 보기</div>
        <div>언론사 목록 보기</div>
        <div>주제 목록 보기</div>
  </div>
  );
};

export default Float;
