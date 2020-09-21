import React, { FC } from "react";
import "../ModalInner.css";

import SaveNews from "./SaveNews";

interface Props {
  title: string;
  createdDate: string;
  contents: string;
  newsId: string;
}

const ModalBody: FC<Props> = ({ newsId, title, createdDate, contents }: Props) => {
    function getTime(time: string) {
        const date: Date = new Date(time);
        const minute = () => {
            if (date.getMinutes() < 10) return ('0' + date.getMinutes());
            return date.getMinutes();
        }
        const second = () => {
            if (date.getSeconds() < 10) return ('0' + date.getSeconds());
            return date.getSeconds();
        }
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}:${minute()}:${second()}`;
    }

  return (
    <div className="ModalBody">
        <div className="ModalTitle">{title}</div>
        <div className="ModalTitleBottom">
          <SaveNews newsId={newsId} title={title}/>
          <span className="ModalTime">작성일 : {getTime(createdDate)}</span>
        </div>
        <hr />
        <div className="ModalContents" dangerouslySetInnerHTML={{ __html: contents}}></div>
    </div>
  );
};

export default ModalBody;
