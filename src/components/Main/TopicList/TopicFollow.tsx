import React, { FC, useState, useEffect } from "react";
import "./TopicListItem.css";
import { useToasts } from "react-toast-notifications";

import axios from "axios";

interface Props {
  isFollow: boolean;
  topicId: string;
  name: string;
}

const PressFollow: FC<Props> = ({ isFollow, topicId, name }: Props) => {
  const [follow, setFollow] = useState<boolean>(isFollow);
  const { addToast } = useToasts();
  const followText = `${name}를 팔로우 했습니다!`;
  const unFollowText = `${name}를 언팔로우 했습니다!`;

  useEffect(() => {}, [follow]);

  async function doFollow(topicId: string) {
    try {
      const response = await axios.post(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/topic`,
        { topicId: topicId }
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

  async function doUnfollow(topicId: string) {
    const response = await axios.delete(
      `${process.env["REACT_APP_BACKEND_SERVER"]}/topic`,
      { data: { topicId: topicId } }
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
        className="TopicFollow"
        onClick={() => {
          doUnfollow(topicId);
        }}
      >
        <span>
          <i className="fas fa-star fa-2x"></i>
        </span>
      </div>
    );
  }
  return (
    <div
      className="TopicFollow"
      onClick={() => {
        doFollow(topicId);
      }}
    >
      <span>
        <i className="far fa-star fa-2x"></i>
      </span>
    </div>
  );
};

export default PressFollow;
