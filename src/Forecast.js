import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
        <div className="Forecast">
            <div>
                <div id="header-upcoming">Upcoming weather for your location:</div>
                <img
                    src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                    id="weather-icon"
                    alt="weather"
                />
            </div>
            <div className="row upcoming-weather" id="forecast"></div>
        </div>
    );
}
