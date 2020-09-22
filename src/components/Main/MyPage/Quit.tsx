import React, { FC, useState, useRef } from "react";
import "./Quit.css";
import axios from "axios";

import Swal, { SweetAlertResult } from "sweetalert2";
import Button from "../../Util/Button/Button";

const Quit: FC = () => {
  const [value, setValue] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  async function quitCheck() {
    const realValue = value.replace(/ /g, "");
    if (realValue === "회원탈퇴") {
      quit();
    } else {
      Swal.fire({
        icon: "error",
        text: "입력란을 다시 확인해주세요.",
      });
    }
  }

  function quit() {
    axios
      .delete(`${process.env["REACT_APP_BACKEND_SERVER"]}/user`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res) {
          Swal.fire({
            icon: "success",
            title: "회원 탈퇴 되었습니다.",
            text: "안녕히 가세요...",
          }).then(({ value }: SweetAlertResult) => {
            if (value) window.location.href = "/";
          });
        }
      });
  }

  return (
    <div className="QuitWrapper">
      <span className="QuitTitle">회원 탈퇴</span>
      <hr />
      <span className="QuitText">회원 탈퇴를 위해서 아래 입력란에</span>
      <span className="QuitText bold">"회원 탈퇴"</span>
      <span className="QuitText">
        라고 적은 뒤, 회원 탈퇴 버튼을 눌러주세요.
      </span>
      <input
        className="QuitInput"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button func={quitCheck} text={"회원탈퇴"} />
    </div>
  );
};

export default Quit;
