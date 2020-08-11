import React, { FC } from "react";
import "../../../css/GuestMain.css";
import "./Bottom.css";

import ImgBlock from "../../Util/Block/ImgBlock";

interface ImgBlockProps {
  title: string;
  img: string;
  exp: string;
  exp2: string;
}

const Middle: FC = () => {
  const like: ImgBlockProps = {
    title: "개발 언어",
    img: "/Bottom/JS.png",
    exp: `ECMAScript 6, TypeScript`,
    exp2: `를 사용하여 개발하였습니다.`,
  };

  const reply: ImgBlockProps = {
    title: "프레임워크",
    img: "/Bottom/React.png",
    exp: "Back-end 프레임워크로 Express.js,",
    exp2: "Front-end 프레임워크로 React를 사용하였습니다.",
  };

  const press: ImgBlockProps = {
    title: "DB",
    img: "/Bottom/MongoDB.png",
    exp: `크롤링한 데이터를 저장하기 위해서`,
    exp2: `NoSQL인 MongoDB를 사용하였습니다.`,
  };

  return (
    <div className="wrapper section">
      <div className="contents w100h100 flexColumn flexMiddle bgColor">
        <div
          className="middleTop flexColumn flexCenter"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <div className="middleTitle">개발 요소</div>
          <div className="middleExp">소식은 아래와 같은 구성으로 만들어졌습니다.</div>
          <hr className="middleHr" />
        </div>
        <div className="middleBottom flexColumn flexCenter">
          <div className="middleBox flexCenter">
            <ImgBlock content={like} />
            <ImgBlock content={reply} />
            <ImgBlock content={press} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
