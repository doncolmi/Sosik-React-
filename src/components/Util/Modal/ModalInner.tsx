import React, { FC } from "react";
import axios from 'axios';
import "./Modal.css";
import "./ModalInner.css";

import { useDispatch } from "react-redux";
import { News } from "../../Main/NewsList/NewsList";
import { setIsView } from "../../../modules/news";

import { useToasts } from "react-toast-notifications";

interface Props {
  data: News;
}

const ModalInner: FC<Props> = ({ data }: Props) => {
  const { addToast } = useToasts();

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

  async function saveFakeNews() {
    try {
      const response = await axios.post(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/news/fake`,
        { newsId: data.newsId }
      );
      if (response) {
        addToast("해당 뉴스의 가짜 뉴스 지수가 + 1 되었습니다.", {
          appearance: "success",
          autoDismiss: true,
        });
      } 
    } catch (e) {
      throw new Error(e);
    }
  }

  // todo: 컴포넌트화 시키자 꼭

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
      <div className="ModalFooter">
        <div className="question">혹시 이 뉴스가 가짜 뉴스 같나요?</div>
        <div className="fakeBtn" onClick={() => saveFakeNews()}>
          <span><i className="fas fa-angry"></i></span><br/>
          가짜뉴스가 의심된다면 눌러주세요!
          </div>
      </div>
    </div>
  );
};

export default ModalInner;
