import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import "./Layout.css";

export default function Look() {
  return (
    <div className="Layout">
      <div className="weather-app">
        <Header />
        <Weather defaultCity="New York" />
      </div>
      <h1 className="Greetings"> </h1>
    </div>
  );
}
