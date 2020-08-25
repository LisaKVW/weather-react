import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <h1>
            {" "}
      Good Afternoon!
            <span className="sun_emoji" role="img" aria-label="sun">
                {" "}
        ☀️
      </span>
        </h1>
    );
}
