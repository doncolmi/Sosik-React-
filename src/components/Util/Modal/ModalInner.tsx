import React, { FC } from "react";
import "./Modal.css";
import "./ModalInner.css";

import { useDispatch } from "react-redux";
import { News } from "../../Main/NewsList/NewsList";
import { setIsView } from "../../../modules/news";

interface Props {
  data: News;
}

const ModalInner: FC<Props> = ({ data }: Props) => {
  const dispatch = useDispatch();
  const doSetIsView = (bool: boolean) => {
    dispatch(setIsView(bool));
  };
  async function closeModal() {
    await doSetIsView(false);
  }

  function getTime(time: string) {
    const date: Date = new Date(time);
    const minute = () => {
      if (date.getMinutes() < 10) return ('0' + date.getMinutes());
      return date.getMinutes()
    }
    const second = () => {
      if (date.getSeconds() < 10) return ('0' + date.getSeconds());
      return date.getSeconds()
    }
    return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDay()}일 ${date.getHours()}:${minute()}:${second()}`;
  }

  if (!data) return <></>;
  return (
    <div className="ModalInner">
      <div className="ModalHeader">
        <span className="PressTopic">
          {data.pressName} / {data.topicName}
        </span>
        <span className="ModalCloseBtn" onClick={() => closeModal()}>
          <i className="fas fa-times fa-2x"></i>
        </span>
      </div>
      <div className="ModalBody">
        <div className="ModalTitle">{data.title}</div>
        <div className="ModalTitleBottom">
          <span className="ModalSave">뉴스 저장하기</span>
          <span className="ModalTime">작성일 : {getTime(data.createdDate)}</span>
        </div>
        <hr />
        <div className="ModalContents" dangerouslySetInnerHTML={{ __html: data.contents}}></div>
      </div>
    </div>
  );
};

export default ModalInner;
