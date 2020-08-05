import React, { FC } from "react";
import "./SignBlock.css";

import Button from "../../../Util/Button/Index";

const Login: FC = () => {
  return (
    <div className="login signBlock">
        <div className="loginTitle">로그인</div>
        <hr />
        <div className="loginForm flexCenter">
          <label htmlFor="id">아이디</label>
          <input type="text" id="id" />
          <label htmlFor="pw">비밀번호</label>
          <input type="password" id="pw" />
        </div>
        <div className="loginBtn">
          <Button />
        </div>
    </div>
  );
};

export default Login;
