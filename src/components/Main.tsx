  
import React, { FC } from "react";
import '../css/Main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Bam: FC = () => {
  AOS.init();
  return (
    <div>
      <div className="wrapper">
        <img className="wrapImg wrapper" src="/BackgroundImg.jpg" alt="" />
        <div className="blue w100h100"></div>
        <div className="contents w100h100 flexColumn flexCenter">
          <div className="title" data-aos="fade-up">소 식</div>
          <div className="exp" data-aos="fade-up">
          멀리 떨어져 있는 사람의 사정을 알리는 말이나 글
          </div>
        </div>
      </div>
      <div className="w100h100">
        <div className="contents w100h100 flexColumn flexCenter">
          <div className="title" data-aos="fade-up">소 식</div>
          <div className="exp" data-aos="fade-up">
          멀리 떨어져 있는 사람의 사정을 알리는 말이나 글
          </div>
        </div>
    </div>
  </div>
  );
};

export default Bam;