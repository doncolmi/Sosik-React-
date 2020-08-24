import React, { FC } from "react";
import "./PressListItem.css";

interface Props {
  num: number;
}

const PressNum: FC<Props> = ({ num }: Props) => {
  return (
    <div className="PressListNumber NumberLine">
        <span>{num}</span>
    </div>
  );
};

export default PressNum;
