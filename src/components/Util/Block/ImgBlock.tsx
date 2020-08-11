import React, { FC } from "react";
import "./ImgBlock.css";

interface ImgBlockProps {
  title: string;
  img: string;
  exp: string;
  exp2: string;
}

interface Props {
  content: ImgBlockProps;
}

const Block: FC<Props> = ({ content }: Props) => {
  return (
    <div
      className="box imgBox shawdow"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <div className="boxTop imgBoxTop flexCenter">
        <div className="boxTitle">{content.title}</div>
        <hr className="ImgBoxHr" />
      </div>

      <div className="ImgBoxMiddle flexCenter">
        <span>
          <img className="boxImg" src={content.img} alt="하이" />
        </span>
      </div>

      <div className="ImgBoxBottom flexCenter">
        <div className="boxExp">
          {content.exp}
          <br />
          {content.exp2}
        </div>
      </div>
    </div>
  );
};

export default Block;
