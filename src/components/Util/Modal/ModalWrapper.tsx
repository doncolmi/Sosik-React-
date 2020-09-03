import React, { FC, useState, useEffect } from "react";
import "./Modal.css";

import { Properties } from "csstype";
import { News } from "../../Main/NewsList/NewsList";
import ModalInner from "./ModalInner";

interface Props {
  isView: boolean;
  data: News;
}

const ModalWrapper: FC<Props> = ({ isView, data }: Props) => {
  const [style, setStyle] = useState<Properties>();

  function checkIsView(isView: boolean): Properties {
    return isView ? { display: "inherit" } : { display: "none" };
  }

  useEffect(() => {
    setStyle(checkIsView(isView));
  }, [isView]);

  return (
    <div className="ModalWrapper" style={style}>
      <ModalInner data={data} />
    </div>
  );
};

export default ModalWrapper;
