import React, { FC } from "react";
import "./Modal.css";
import "./ModalInner.css";

import { News } from "../../Main/NewsList/NewsList";

import ModalHeader from "./Content/ModalHeader";
import ModalBody from "./Content/ModalBody";
import ModalFooter from "./Content/ModalFooter";

interface Props {
  data: News;
}

const ModalInner: FC<Props> = ({ data }: Props) => {
  

  if (!data) return <></>;
  return (
    <div className="ModalInner">
      <ModalHeader pressName={data.pressName} topicName={data.topicName}/>
      <ModalBody title={data.title} createdDate={data.createdDate} contents={data.contents} />
      <ModalFooter newsId={data.newsId} />
    </div>
  );
};

export default ModalInner;
