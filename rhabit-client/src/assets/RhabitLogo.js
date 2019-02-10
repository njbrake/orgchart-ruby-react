import React from "react";
import logo from "./logo.png";

export default () => {
  return (
    <div>
      <img
        src={logo}
        style={{ width: "100px", marginLeft: "5px", display: "block" }}
        alt="Logo"
      />
    </div>
  );
};
