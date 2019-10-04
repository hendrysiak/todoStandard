import React from "react";

export const ToDo = props => {
  return (
    <li className="todo__item">
      {props.name}
      <button onClick={props.onClick} className="todo__delete">
        Wykonano
      </button>
    </li>
  );
};
