import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Sunday Aug. 16 16:00",
    temperature: " 30 ℃ | 86 °F ",
    description: "Sunny",
    humidity: "60%",
    wind: "2",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
  };
  return (
    <div className="Weather">
      <p className="current-update-location"> </p>
      <div className="row">
        <div className="col-4">
          <ul>
            <li>{weatherData.city}</li>
            <li>{weatherData.date}</li>
            <li>{weatherData.temperature}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>

        <div className="col-4">
          <ul>
            <br />
            <li> Humidity {weatherData.humidity}</li>
            <li> Wind {weatherData.wind} Km/H</li>
          </ul>
        </div>
      </div>
      <img
        className="weatherImage"
        src={weatherData.imgUrl}
        alt="{weatherData.description}"
      />
    </div>
  );
}
