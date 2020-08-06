import React, { FC } from "react";
import "../../../css/Main.css";
import "./Top.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Kakao from '../../Util/SocialLogin/Kakao';
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
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            멀리 떨어져 있는 사람의 사정을 알리는 말이나 글
          </div>
          <div 
            className="login" 
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <Kakao />
          </div>
          
          <Down Message="스크롤해서 사이트 특징 보기"/>
        </div>
        
      </div>
    </div>
  );
};

export default Top;
