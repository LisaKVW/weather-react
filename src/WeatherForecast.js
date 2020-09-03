import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastRequest(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <span className="WeatherForecast">
        {" "}
        Upcoming weather for your location:
        <div className="WeatherForecast row">
          <WeatherForecastPreview data={forecast.list[0]} />
          <WeatherForecastPreview data={forecast.list[1]} />
          <WeatherForecastPreview data={forecast.list[2]} />
          <WeatherForecastPreview data={forecast.list[3]} />
          <WeatherForecastPreview data={forecast.list[4]} />
        </div>
      </span>
    );
  } else {
    let apiKey = "75f4950e1c8c4405bfe894443eefc1e1";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city},&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleForecastRequest);

    return null;
  }
}
