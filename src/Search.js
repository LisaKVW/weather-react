import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [info, setInfo] = useState(null);

  function showTemp(response) {
    setInfo(main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "75f4950e1c8c4405bfe894443eefc1e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemp);
  }

  function submittedCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city"
          autoFocus="on"
          onChange={submittedCity}
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
      <Weather info={info} />
    </div>
  );
}
