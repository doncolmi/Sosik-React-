import React, { SFC } from "react";
import "./Press.css";
import { RouteComponentProps } from "react-router";

interface MatchParams {
    name: string;
}

const Press: SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
    const { name } = match.params;
    return <>{name}</>;
}

export default Press;