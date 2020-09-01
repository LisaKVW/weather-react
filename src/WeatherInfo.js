import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="current-update-location"> </p>
      <div className="row">
        <div className="col">
          <ul>
            <li>{props.data.city}</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{Math.round(props.data.temperature)} ℃ </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <br />
            <li> Humidity {props.data.humidity} % </li>
            <li> Wind {props.data.wind} Km/H</li>
          </ul>
        </div>
      </div>
      <img src={props.data.imgUrl} />
    </div>
  );
}
