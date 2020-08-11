import React, { FC } from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const MyInfo: FC = () => {
  return (
    <div className="myInfoWrapper">
        
        <span className="profilePicture w32h32"><Link to="/hi"><img src="/BackgroundImg.jpg" className="w32h32" alt=""/></Link></span>
            <span className="nickName"><Link to="/hi">임대성</Link></span>
        
    </div>
  );
};

export default MyInfo;
