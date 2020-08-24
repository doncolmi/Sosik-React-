import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./PressListItem.css";

interface Props {
  name: boolean;
}

const PressName: FC<Props> = ({ name }: Props) => {

    const pressUrl = `/press/${name}`

  return (
    <div className="PressName">
        <Link to={pressUrl}>
            <span>{ name }</span>
        </Link>
    </div>
  );
};

export default PressName;
