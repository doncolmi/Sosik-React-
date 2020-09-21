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

  const kakaoJSKey: string = process.env["REACT_APP_KAKAO_API"]!;

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

  const welcomeMessage = (access_token: string): void => {
    Swal.fire({
      icon: "success",
      title: "회원가입 성공!",
      text: "회원가입 성공되었습니다!",
    }).then(({ value }: SweetAlertResult) => {
      if (value) window.location.reload();
    });
  };

  const responseKaKao = async ({ profile, response }: kakaoObject) => {
    const userDto: UserDto = createUserDto(profile, response);
    const { data } = await Axios.post(
      `${process.env["REACT_APP_BACKEND_SERVER"]}/auth/login`,
      userDto,
      { withCredentials: true }
    );
    const { access_token }: tokenInfo = response;
    if (data) window.location.reload();
    else await welcomeMessage(access_token);
  };

  const responseFail = (err: any) => {
    console.log(err);
  };

  return (
    <KakaoLogin
      jsKey={kakaoJSKey}
      useDefaultStyle={true}
      className="KakaoLogin"
      onSuccess={responseKaKao}
      onFailure={responseFail}
      getProfile={true}
    />
  );
};

export default Kakao;
