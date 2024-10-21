import react from "react";
import { useState } from "react";

export const HeaderMenuItem = (props) => {
  const iWasClicked = () => {
    props.onPageMenuClick(props.text);
  };

  return (
    <li>
      <a
        onClick={iWasClicked}
        className={`headeranchor ${
          props.activePage === props.text ? "active" : ""
        }`}
        href="#"
      >
        {props.text}
      </a>
    </li>
  );
};
