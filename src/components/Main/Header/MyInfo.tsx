import React, { FC, useState } from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import axios from 'axios';

const MyInfo: FC = () => {

  const [name, setName] = useState<string>("User");
  const [url, setUrl] = useState<string>("");

  const getUserInfo = async () => {
    try{
      const { data }: any = await axios.get(`${process.env["REACT_APP_BACKEND_SERVER"]}/user`);
      await setName(data.name);
      await setUrl(data.thumbnailImage);
    } catch(e) {
      console.log(e);
    }
  };

  useState(() => {
    getUserInfo();
  })

  return (
    <div className="myInfoWrapper"> 
        <span className="profilePicture w32h32"><Link to="/profile"><img src={url} className="w32h32" alt=""/></Link></span>
        <span className="nickName"><Link to="/profile">{name}</Link></span>
    </div>
  );
};

export default MyInfo;
