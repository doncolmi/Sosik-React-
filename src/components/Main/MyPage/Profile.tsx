import React, { FC } from "react";
import "./Profile.css";

import axios from "axios";

import LoadingBar from "../../Util/Loading/LoadingBar";
import Button from "../../Util/Button/Button";

import { useGetRequest } from "../../../hooks/useRequest";

const Profile: FC = () => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_BACKEND_SERVER"]}/user`
  );

  if (loading) return <LoadingBar />;
  if (error) return <div>error!</div>;

  if (!response) return <></>;

  const { name, createdDate } = response.data;

  function getTime(time: string) {
    const date: Date = new Date(time);
    const minute = () => {
      if (date.getMinutes() < 10) return "0" + date.getMinutes();
      return date.getMinutes();
    };
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시 ${minute()}분`;
  }

  async function logout() {
    axios
      .get(`${process.env["REACT_APP_BACKEND_SERVER"]}/auth/logout`, {
        withCredentials: true,
      })
      .then((res) => res && (window.location.href = "/"));
  }

  async function goQuit() {
    window.location.href = "/quit";
  }

  return (
    <div className="ProfileWrapper">
      <span className="ProfileTitle">내 정보</span>
      <hr />
      <div className="ProfileBlock">
        <span className="ProfileTop">이름</span>
        <hr />
        <span className="ProfileTopSub">{name}</span>
      </div>
      <div className="ProfileBlock">
        <span className="ProfileTop">가입 일자</span>
        <hr />
        <span className="ProfileTopTime">{getTime(createdDate)}</span>
      </div>
      <div className="ProfileButtons">
        <Button func={logout} text={"로그아웃"} />
        <Button func={goQuit} text={"회원탈퇴"} />
      </div>
    </div>
  );
};

export default Profile;
