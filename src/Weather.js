import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemp(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "75f4950e1c8c4405bfe894443eefc1e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function showSearchCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search city"
            autoFocus="on"
            onChange={showSearchCity}
          />
          <input type="submit" value="search" />
          <button type="button" id="location-emoji">
            <span
              className="round_pushpin"
              role="img"
              aria-label="current location"
            >
              📍
            </span>
          </button>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
