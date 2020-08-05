import React, { FC } from 'react';
import './icon.css';

const Down: FC = () => {
    return (
        <div className="icons down flexColumn flexCenter">
            <div className="scrollMessage">스크롤해서 로그인 및 회원가입 하기</div>
            <span className="motions"><i className="fas fa-chevron-down"></i></span>
        </div>
    );
}

export default Down;