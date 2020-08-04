import React, { FC, useEffect, WheelEvent, useState } from "react";
import "../css/Main.css";

import Top from "./Main/Top";
import Dots from "./Main/Dots/Dots";

enum ScrollUpDown {
  UP = 1,
  DOWN = -1,
}

const Main: FC = () => {
  const [section, setSection] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [moveHeight, setMoveHeight] = useState(0);
  const [maxSection, setMaxSection] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const section = document.getElementsByClassName("section");
    setMaxSection(section.length - 1);
    setMoveHeight(section[0].clientHeight);

    const cancelWheel = (event: any) => event.preventDefault();
    document.body.addEventListener("wheel", cancelWheel, { passive: false });
    return () => {
      document.body.removeEventListener("wheel", cancelWheel);
    };
  }, []);

  const waitForScroll = (isStart: boolean): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setIsScroll(isStart);
      resolve(true);
    });
  };

  const doScroll = (
    section: number,
    moveHeight: number,
    upDown: ScrollUpDown
  ): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      window.scrollTo({
        top: (section + upDown) * moveHeight,
        left: 0,
        behavior: "smooth",
      });
      setSection(section + upDown);
      resolve(true);
    });
  };

  const hi = (e: WheelEvent) => {
    const Y = e.deltaY;
    waitForScroll(true).then((res) => {
      if (Y > 0 && section < maxSection && !isScroll) {
        doScroll(section, moveHeight, ScrollUpDown.UP).then((res) => {
          if (section > maxSection) setSection(maxSection);
        });
      } else if (Y < 0 && section > 0 && !isScroll) {
        doScroll(section, moveHeight, ScrollUpDown.DOWN).then((res) => {
          if (section < 0) setSection(0);
        });
      }
      setTimeout(() => setIsScroll(false), 1300);
    });
  };

  return (
    <div className="wrapper" onWheelCapture={hi}>
      <Dots currentSection={section} />
      <Top />
      <div className="wrapper section ">
        <div className="contents w100h100 flexColumn flexCenter"></div>
      </div>
      <div className="wrapper section popup">
        <div className="contents w100h100 flexColumn flexCenter popup">dd</div>
      </div>
    </div>
  );
};

export default Main;
