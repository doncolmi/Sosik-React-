import React, { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Float.css";

import FloatMenu from "./FloatMenu";

const Float: FC = () => {
  const location = useLocation();
  const [current, setCurrent] = useState<number>(
    setLocation(location.pathname)
  );

  function setLocation(path: string): number {
    if (path.includes("all")) return 3;
    else if (path.includes("press")) return 4;
    else if (path === "/news/topic") return 2;
    else if (path.includes("topic")) return 5;
    else if (path.includes("save")) return 6;
    else return 1;
  }

  return (
    <div className="Floatting">
      <div onClick={() => setCurrent(1)}>
        <FloatMenu
          link="/"
          content="언론사 기준 뉴스피드"
          current={current}
          thisNum={1}
        />
      </div>
      <div onClick={() => setCurrent(2)}>
        <FloatMenu
          link="/news/topic"
          content="주제 기준 뉴스피드"
          current={current}
          thisNum={2}
        />
      </div>
      <div onClick={() => setCurrent(3)}>
        <FloatMenu
          link="/all"
          content="전체 기사 보기"
          current={current}
          thisNum={3}
        />
      </div>
      <div onClick={() => setCurrent(4)}>
        <FloatMenu
          link="/press"
          content="언론사 목록 보기"
          current={current}
          thisNum={4}
        />
      </div>
      <div onClick={() => setCurrent(5)}>
        <FloatMenu
          link="/topic"
          content="주제 목록 보기"
          current={current}
          thisNum={5}
        />
      </div>
      <div onClick={() => setCurrent(6)}>
        <FloatMenu
          link="/save"
          content="내가 저장한 기사 보기"
          current={current}
          thisNum={6}
        />
      </div>
    </div>
  );
};

export default Float;
