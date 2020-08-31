import React from "react";
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./Layout.css";

export default function Look() {
  return (
    <div className="Layout">
      <div className="weather-app">
        <Header />
        <Search />
        <Weather defaultCity="Haarlem" />
        <Forecast />
      </div>
      <h1 className="Greetings"> </h1>
    </div>
  );
}
