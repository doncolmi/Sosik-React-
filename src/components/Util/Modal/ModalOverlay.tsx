import React, { FC, useState, useEffect } from "react";
import "./Modal.css";

import { Properties } from "csstype";

interface Props {
  isView: boolean;
}

const ModalOverlay: FC<Props> = ({ isView }: Props) => {
  const [style, setStyle] = useState<Properties>();

  function checkIsView(isView: boolean): Properties {
    return isView ? { display: "inherit" } : { display: "none" };
  }

  useEffect(() => {
    setStyle(checkIsView(isView));
  }, [isView]);
  return <div className="ModalOverlay" style={style}></div>;
};

export default ModalOverlay;
