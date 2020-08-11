import React, { FC } from "react";
import {Link} from "react-router-dom";

import "./Header.css";

import MyInfo from "./MyInfo";

const Header: FC = () => {
  return (
    <div className="HeaderWrapper">
        <div className="HomeBtn">
            <Link to="/">소 식</Link>
        </div>
        <MyInfo />
    </div>
  );
};

export default Header;
