import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Float.css";

interface Props {
    link: string;
    content: string;
    current: number;
    thisNum: number;
}

const FloatMenu: FC<Props> = ({link, content, current, thisNum}: Props) => {
  
    const [style, setStyle] = useState<string>("");
  useEffect(() => {
    checkCurrent(current, thisNum);
  }, [ current ])

    function checkCurrent(cur:number, num: number) {
        cur === num ? setStyle("activeMenu") : setStyle("")
    }


  return (
      <div className={style}>
        <Link to={link}>{content}</Link>
      </div>
  );
};

export default FloatMenu;
