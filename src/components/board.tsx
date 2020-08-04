import React, { FC } from "react";
import "../css/Main.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Bam: FC = () => {
  AOS.init();

  return (
    <div className="wrapper">
      <div className="wrapper">
        <img className="wrapImg w100h100" src="/BackgroundImg.jpg" alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default Bam;
