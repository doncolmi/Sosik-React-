import React, { FC, useState, useEffect } from "react";
import "./PressListItem.css";
import { useToasts } from "react-toast-notifications";

import axios from "axios";

interface Props {
  isFollow: boolean;
  pressId: string;
  name: string;
}

const PressFollow: FC<Props> = ({ isFollow, pressId, name }: Props) => {
  const [follow, setFollow] = useState<boolean>(isFollow);
  const { addToast } = useToasts();
  const followText = `${name}를 팔로우 했습니다!`;
  const unFollowText = `${name}를 언팔로우 했습니다!`;

  useEffect(() => {}, [follow]);

  async function doFollow(pressId: string) {
    try {
      const response = await axios.post(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/press`,
        { pressId: pressId }
      );
      if (response) {
        await setFollow(true);
        addToast(followText, {
          appearance: "success",
          autoDismiss: true,
        });
      } else setFollow(false);
    } catch (e) {
      throw new Error(e);
    }
  }

  async function doUnfollow(pressId: string) {
    const response = await axios.delete(
      `${process.env["REACT_APP_BACKEND_SERVER"]}/press`,
      { data: { pressId: pressId } }
    );
    if (response) {
      await setFollow(false);
      addToast(unFollowText, {
        appearance: "error",
        autoDismiss: true,
      });
    } else setFollow(true);
  }

  if (follow) {
    return (
      <div
        className="PressFollow"
        onClick={() => {
          doUnfollow(pressId);
        }}
      >
        <span>
          <i className="fas fa-heart fa-2x"></i>
        </span>
      </div>
    );
  }
  return (
    <div
      className="PressFollow"
      onClick={() => {
        doFollow(pressId);
      }}
    >
      <span>
        <i className="far fa-heart fa-2x"></i>
      </span>
    </div>
  );
};

export default PressFollow;
