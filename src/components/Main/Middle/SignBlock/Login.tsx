import React, { FC } from "react";
import "./SignBlock.css";

import Kakao from "../../../Util/SocialLogin/Kakao";

const Login: FC = () => {
  return (
    <div className="signBlock">
      <div className="loginTitle">로그인 및 회원가입</div>
      <hr />
      <div className="loginForm flexCenter">
        <span className="newsIcon">
          <i className="fas fa-newspaper"></i>
        </span>
        <p>
          소셜 로그인 후<br />
          서비스 이용이 가능합니다.
        </p>
      </div>
      <div className="loginBtn">
        <Kakao />
      </div>
    </div>
  );
};

export default Login;
