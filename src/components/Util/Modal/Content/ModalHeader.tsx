import React, { FC } from "react";
import "../ModalInner.css";

import { useDispatch } from "react-redux";
import { setIsView } from "../../../../modules/news";


interface Props {
  pressName: string;
  topicName: string;
}

const ModalHeader: FC<Props> = ({ pressName, topicName }: Props) => {
  const dispatch = useDispatch(); 
  const doSetIsView = (bool: boolean) => {
    dispatch(setIsView(bool));
  };
  async function closeModal() {
    await doSetIsView(false);
  }

  return (
    <div className="ModalHeader">
        <span className="PressTopic">
          {pressName} / {topicName}
        </span>
        <span className="ModalCloseBtn" onClick={() => closeModal()}>
          <i className="fas fa-times fa-2x"></i>
        </span>
    </div>
  );
};

export default ModalHeader;
