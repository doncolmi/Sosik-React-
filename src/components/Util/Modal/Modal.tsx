import React, { FC, useEffect, useState } from "react";
import "./Modal.css";
import Portal from "./Portal";

import ModalOverlay from "./ModalOverlay";
import ModalWrapper from "./ModalWrapper";

import { News } from "../../Main/NewsList/NewsList";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

const Modal: FC = () => {
  const state = useSelector((state: RootState) => state.news);

  return (
    <>
      <ModalOverlay isView={state.isView} />
      <ModalWrapper isView={state.isView} data={state.newsData!} />
    </>
  );
};

export default Modal;
