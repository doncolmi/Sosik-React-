import React, { FC, useState, useEffect } from "react";
import "./PressListItem.css";

import axios from "axios";
import Swal from "sweetalert2";

interface Props {
  isFollow: boolean;
  pressId: string;
}

const PressFollow: FC<Props> = ({ isFollow, pressId }: Props) => {
  const [follow, setFollow] = useState<boolean>(isFollow);

  useEffect(() => {}, [follow]);

  async function doFollow(pressId: string) {
    try {
      const response = await axios.post(
        `${process.env["REACT_APP_BACKEND_SERVER"]}/press`,
        { pressId: pressId }
      );
      if (response) {
        await setFollow(true);
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
