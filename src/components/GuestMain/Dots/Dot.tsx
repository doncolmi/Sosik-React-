import React, { FC } from "react";
import "./Dots.css";

import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  active: boolean;
}

const Top: FC<Props> = ({ active }) => {
  AOS.init();

  if (active) {
    return <div className="dot active"></div>;
  }
  return <div className="dot"></div>;
};

export default Top;
