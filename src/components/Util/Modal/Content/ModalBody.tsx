import React, { FC } from "react";
import "../ModalInner.css";

interface Props {
  title: string;
  createdDate: string;
  contents: string
}

const ModalBody: FC<Props> = ({ title, createdDate, contents }: Props) => {
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

  return (
    <div className="ModalBody">
        <div className="ModalTitle">{title}</div>
        <div className="ModalTitleBottom">
          <span className="ModalSave">뉴스 저장하기</span>
          <span className="ModalTime">작성일 : {getTime(createdDate)}</span>
        </div>
        <hr />
        <div className="ModalContents" dangerouslySetInnerHTML={{ __html: contents}}></div>
    </div>
  );
};

export default ModalBody;
