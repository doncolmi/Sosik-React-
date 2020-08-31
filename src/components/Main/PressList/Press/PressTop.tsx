import React, { FC } from "react";
import "./PressTop.css";

import { useGetRequest } from "../../../../hooks/useRequest";

import Axios from "axios";

import PressFollow from "../PressFollow";

interface Props {
  name: string;
  pId: any;
}

const PressTop: FC<Props> = ({ name, pId }: Props) => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_BACKEND_SERVER"]}/press/${name}/follow`
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  if (!response) return null;

  return (
    <div className="pTop">
      <PressFollow isFollow={response.data} pressId={pId} name={name} />
      <div className="pSmall">언론사</div>
      <div className="pName">{name}</div>
    </div>
  );
};

export default PressTop;
