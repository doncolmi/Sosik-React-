import React, { FC } from "react";

import "./PressListItem.css";

interface Props {
  isFollow: boolean;
}

const PressFollow: FC<Props> = ({ isFollow }: Props) => {
  if (isFollow) {
    return (
      <div className="PressFollow">
        <span>
          <i className="fas fa-heart fa-2x"></i>
        </span>
      </div>
    );
  }
  return (
    <div className="PressFollow">
      <span>
        <i className="far fa-heart fa-2x"></i>
      </span>
    </div>
  );
};

export default PressFollow;
