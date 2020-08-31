import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showTemp(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <p className="current-update-location"> </p>
        <div className="row">
          <div className="col">
            <ul>
              <li>{weatherData.city}</li>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li>{Math.round(weatherData.temperature)} ℃ </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <br />
              <li> Humidity {weatherData.humidity} % </li>
              <li> Wind {weatherData.wind} Km/H</li>
            </ul>
          </div>
        </div>
        <img src={weatherData.imgUrl} />
      </div>
    );
  } else {
    const apiKey = "75f4950e1c8c4405bfe894443eefc1e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemp);

    return "loading...";
  }
}
