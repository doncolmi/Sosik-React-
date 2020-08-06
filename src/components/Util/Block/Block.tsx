import React, { FC } from "react";
import "./Block.css";

interface BlockProps {
  title: string;
  iconClass: string;
  exp: string;
  exp2: string;
}

interface Props {
  content: BlockProps;
}

const Block: FC<Props> = ({ content }: Props) => {
  return (
    <div className="box shawdow">
      <div className="boxTop flexCenter">
        <div className="boxTitle">{ content.title }</div>
        <hr className="boxHr" />
      </div>

      <div className="boxMiddle flexCenter">
        <span className="boxIcon"><i className={ content.iconClass }></i></span>
      </div>

      <div className="boxBottom flexCenter">
        <div className="boxExp">{ content.exp }<br />{ content.exp2 }</div>
      </div>
    </div>
  );
};

export default Block;
