import React, { FC } from "react";
import "../../../css/Main.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Icons from './Icons/Icons';
import Down from './Icons/Down';

const Top: FC = () => {
  AOS.init();

  return (
    <div className="wrapper section wrapImg">
      <div className="wrapper">
        <div className="halfOpacity w100h100" />
        <div className="contents w100h100 flexColumn flexCenter">
          <div
            className="title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            소 식
          </div>
          <div
            className="exp"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            멀리 떨어져 있는 사람의 사정을 알리는 말이나 글
          </div>
          <Icons />
          <Down />
        </div>
        
      </div>
    </div>
  );
};

export default Top;
