import React, { FC } from "react";
import "./Button.css";

import { Link } from "react-router-dom";

interface Props {
  text: string;
  func: Function;
}

const Button: FC<Props> = ({ text, func }: Props) => {
  return (
    <div onClick={() => func()} className="button">
      {text}
    </div>
  );
};

export default Button;
