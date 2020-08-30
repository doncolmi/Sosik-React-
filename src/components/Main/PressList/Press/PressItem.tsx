import React, { FC } from "react";
import "./PressItem.css";

interface Props {
  icon: string;
  data: any;
  exp: string;
}

const PressItem: FC<Props> = ({ icon, data, exp }: Props) => {
  return (
    <div className="pItem">
      <div className="napkin"></div>
      <span>
        <i className={icon}></i>
      </span>
      <div className="pData">{data}</div>
      <div className="pDescription">{exp}</div>
    </div>
  );
};

export default PressItem;
