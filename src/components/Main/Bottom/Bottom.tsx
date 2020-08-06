import React, { FC } from "react";
import "../../../css/Main.css";
import "./Bottom.css";

import Down from "../Top/Icons/Down";
import Block from "../../Util/Block/Block";

interface BlockProps {
  title: string;
  iconClass: string;
  exp: string;
  exp2: string;
}

const Middle: FC = () => {
  const like: BlockProps = {
    title: "원하는 주제만!",
    iconClass: "fas fa-thumbs-up",
    exp: `좋아하는 주제들을 팔로우하여,`,
    exp2: `내 취향에 맞는 기사를 볼 수 있습니다.`,
  };

  const reply: BlockProps = {
    title: "댓글은 보고 싶을 때만!",
    iconClass: "fas fa-hand-sparkles",
    exp: "뉴스의 댓글이 보고 싶지 않을 때는",
    exp2: "설정을 통하여 댓글을 숨길 수 있습니다.",
  };

  const press: BlockProps = {
    title: "원하는 언론사만!",
    iconClass: "fas fa-thumbs-up",
    exp: `선호하는 언론사들을 팔로우하여,`,
    exp2: `내 취향에 맞는 기사를 볼 수 있습니다.`,
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
          <div className="middleTitle">사이트 특징</div>
          <div className="middleExp">소식은 이런 사이트 입니다.</div>
          <hr className="middleHr" />
        </div>
        <div className="middleBottom flexColumn flexCenter">
          <div className="middleBox flexCenter">
            <Block content={like} />
            <Block content={reply} />
            <Block content={press} />
          </div>
        </div>
        <Down Message="스크롤해서 사이트 특징 보기" />
      </div>
    </div>
  );
};

export default Middle;
