import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Float.css";

const Float: FC = () => {
  return (
    <div className="Floatting">
      <div className="activeMenu">
        <Link to="/">언론사 기준 뉴스피드</Link>
      </div>
      <div>
        <Link to="/">주제 기준 뉴스피드</Link>
      </div>
      <div>
        <Link to="/all">전체 기사 보기</Link>
      </div>
      <div>
        <Link to="/press">언론사 목록 보기</Link>
      </div>
      <div>
        <Link to="/">주제 목록 보기</Link>
      </div>
    </div>
  );
};

export default Float;
