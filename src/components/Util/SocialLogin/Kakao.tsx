import React, { FC } from "react";
import KakaoLogin from "react-kakao-login";

import "./Kakao.css";

const Kakao: FC = () => {
  const responseKaKao = (res: any) => {
    console.log(res);
  };

  const responseFail = (err: any) => {
    console.log(err);
  };

  return (
    <KakaoLogin
      className="KakaoLogin"
      jsKey={"aa6f3690c20a1fcf3540efb50f7448b5"}
      buttonText="KaKao"
      onSuccess={responseKaKao}
      onFailure={responseFail}
      getProfile={true}
    />
  );
};

export default Kakao;
