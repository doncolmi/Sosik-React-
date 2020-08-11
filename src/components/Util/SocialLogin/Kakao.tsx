import React, { FC } from "react";
import KakaoLogin from "react-kakao-login";
import Axios from "axios";
import Swal, { SweetAlertResult } from "sweetalert2";

import "./Kakao.css";

interface kakaoObject {
  profile: Object;
  response: tokenInfo;
}

interface UserDto {
  userId: number;
  name: string;
  profileImage: string;
  thumbnailImage: string;
  refreshToken: string;
  tokenExp: string;
}

interface tokenInfo {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

const Kakao: FC = () => {
  const createUserDto = (profile: any, response: any): UserDto => {
    return {
      userId: profile.id,
      name: profile.properties.nickname,
      profileImage: profile.properties.profile_image,
      thumbnailImage: profile.properties.thumbnail_image,
      refreshToken: response.refresh_token,
      tokenExp: response.refresh_token_expires_in,
    };
  };

  const setAxiosHeader = (accessToken: string): void => {
    Axios.defaults.headers.common["Authorization"] = `${accessToken}`;
  };

  const welcomeMessage = (access_token: string): void => {
    Swal.fire({
      icon: "success",
      title: "회원가입 성공!",
      text: "회원가입 성공되었습니다!",
    }).then(({ value }: SweetAlertResult) => {
      if (value) setAxiosHeader(access_token);
    });
  };

  const responseKaKao = ({ profile, response }: kakaoObject) => {
    const userDto: UserDto = createUserDto(profile, response);
    Axios.post("http://localhost:3001/auth/login", userDto, {
      withCredentials: true,
    }).then(({ data }) => {
      const { access_token }: tokenInfo = response;
      data ? setAxiosHeader(access_token) : welcomeMessage(access_token);
    });
  };

  const responseFail = (err: any) => {
    console.log(err);
  };

  return (
    <KakaoLogin
      jsKey={"aa6f3690c20a1fcf3540efb50f7448b5"}
      useDefaultStyle={true}
      className="KakaoLogin"
      onSuccess={responseKaKao}
      onFailure={responseFail}
      getProfile={true}
    />
  );
};

export default Kakao;
