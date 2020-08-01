import React from "react";
import "./Hello.css";

interface Props {
  name: string;
  age: number;
}

export const Hello: React.FunctionComponent<Props> = ({ name, age }) => {
  return (
    <div className="Hello">
      Hello, {name}, I'm {age}
    </div>
  );
};

export const Bye: React.FunctionComponent<Props> = ({ name }) => {
  return <div className="Bye">Bye, {name}</div>;
};
