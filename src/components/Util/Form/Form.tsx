import React, { FC } from "react";
import "./Form.css";

interface Props {
  labelText: string;
  type: string;
  id: string;
}

const Form: FC<Props> = ({ labelText, type, id }: Props) => {
  return (
    <div className="Form">
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default Form;
