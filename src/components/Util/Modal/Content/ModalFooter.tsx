import React, { FC } from "react";
import axios from 'axios';
import "../ModalInner.css";

import { useToasts } from "react-toast-notifications";

interface Props {
  newsId: string;
}

const ModalFooter: FC<Props> = ({ newsId }: Props) => {
    const { addToast } = useToasts();

  async function saveFakeNews() {
    try {
      const response = await axios.post(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/news/fake`,
        { newsId: newsId }
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

  return (
    <div className="ModalFooter">
        <div className="question">혹시 이 뉴스가 가짜 뉴스 같나요?</div>
        <div className="fakeBtn" onClick={() => saveFakeNews()}>
          <span><i className="fas fa-angry"></i></span><br/>
          가짜뉴스가 의심된다면 눌러주세요!
          </div>
    </div>
  );
};

export default ModalFooter;
