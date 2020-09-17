import React, { FC } from "react";
import "./Modal.css";

import ModalOverlay from "./ModalOverlay";
import ModalWrapper from "./ModalWrapper";

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
