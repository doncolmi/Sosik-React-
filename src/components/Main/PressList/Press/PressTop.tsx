import React, { FC } from "react";
import "./PressTop.css";

import Axios from "axios";

import PressFollow from "../PressFollow";

interface Props {
  name: string;
  pId: any;
}

const PressTop: FC<Props> = ({ name, pId }: Props) => {
  async function getFollowData(name: string) {
    const { data } = await Axios.get(
      `${process.env["REACT_APP_BACKEND_SERVER"]}/press/${name}/follow`
    );
    return data;
  }

  function getIsFollow(name: string): boolean {
    return getFollowData(name) ? true : false;
  }
  return (
    <div className="pTop">
      <PressFollow isFollow={getIsFollow(name)} pressId={pId} name={name} />
      <div className="pSmall">언론사</div>
      <div className="pName">{name}</div>
    </div>
  );
};

export default PressTop;
