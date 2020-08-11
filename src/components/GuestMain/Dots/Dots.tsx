import React, { FC, useEffect, useState } from "react";
import "./Dots.css";

import Dot from "./Dot";

import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  currentSection: number;
}

const Top: FC<Props> = ({ currentSection }: Props) => {
  AOS.init();
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const activeDot = (currentSection: number) => {
    if (currentSection === 0) setOne(true);
    else setOne(false);
    if (currentSection === 1) setTwo(true);
    else setTwo(false);
    if (currentSection === 2) setThree(true);
    else setThree(false);
  };

  useEffect(() => {
    activeDot(currentSection);
  });

  return (
    <div
      className="dots flexCenter"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Dot active={one} />
      <Dot active={two} />
      <Dot active={three} />
    </div>
  );
};

export default Top;
