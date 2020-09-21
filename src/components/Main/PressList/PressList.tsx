import React, { FC } from "react";
import { useGetRequest } from "../../../hooks/useRequest";
import "./PressList.css";

import PressListItem from "./PressListItem";
import LoadingBar from "../../Util/Loading/LoadingBar";


const PressList: FC = () => {
  const [response, loading, error] = useGetRequest(
    `${process.env["REACT_APP_BACKEND_SERVER"]}/press`
  );

  if (loading) return <LoadingBar />;
  if (error) return <div>error!</div>;

  if (!response) return null;

  const pressList: any = response.data.pressList;
  const pressFollowList: any = response.data.pressFollowList;

  function getIsFollow(element: any): boolean {
    return pressFollowList.includes(element.pressId);
  }

  let number = 0;

  return (
    <div className="PressListWrapper">
      <PressListItem isFollow={false} />
      {pressList.map((element: any) => {
        number++;
        return (
          <PressListItem
            data={element}
            num={number}
            key={Math.random()}
            isFollow={getIsFollow(element)}
          />
        );
      })}
    </div>
  );
};

export default PressList;
