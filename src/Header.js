import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <h1>
      {" "}
      Where would you like to go?
      <span className="sun_emoji" role="img" aria-label="sun">
        {" "}
        ☀️
      </span>
    </h1>
  );
}
