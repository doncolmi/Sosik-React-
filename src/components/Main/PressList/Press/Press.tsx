import React, { SFC } from "react";
import "./Press.css";
import { RouteComponentProps } from "react-router";
import PressFollow from "../PressFollow";

import NewsList, { Types } from "../../NewsList/NewsList";

interface MatchParams {
  name: string;
}

const Press: SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { name } = match.params;
  // todo: 데이터 어떻게 받을지, PressFollow 데이터 어떻게 넣을지

  return (
    <div className="PressComponentWrapper">
      <div className="PressComponent">
        <div className="pTop">
          <PressFollow isFollow={false} pressId={"056"} name={name} />
          <div className="pSmall">언론사</div>
          <div className="pName">{name}</div>
        </div>
        <div className="pInfo">
          <div className="pItem">
            <div className="napkin"></div>
            <span>
              <i className="fas fa-thumbs-up"></i>
            </span>
            <div className="pData">4586명</div>
            <div className="pDescription">이 언론사를 팔로우 하는 사람들</div>
          </div>
          <div className="pItem">
            <div className="napkin"></div>
            <span>
              <i className="fas fa-newspaper"></i>
            </span>
            <div className="pData">1284개</div>
            <div className="pDescription">이 언론사의 기사 개수</div>
          </div>
          <div className="pItem">
            <div className="napkin"></div>
            <span>
              <i className="fas fa-comments"></i>
            </span>
            <div className="pData">정치</div>
            <div className="pDescription">이 언론사가 자주 올리는 주제</div>
          </div>
        </div>
      </div>
      <NewsList type={Types.ONLYPRESS} name={name} />
    </div>
  );
};

export default Press;
