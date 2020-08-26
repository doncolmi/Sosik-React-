import React, { FC, useEffect } from "react";
import "./BottomFloat.css";

interface Props {
  text: string;
}

const BottomFloat: FC<Props> = ({ text }: Props) => {
  useEffect(() => {}, [text]);
  return <div className="BottomFloat">{text}</div>;
};

export default BottomFloat;
