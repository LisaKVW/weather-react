import React from "react";
import "./Search.css";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  return (
    <div className="Search">
      <form className="form-inline">
        <input type="text" placeholder="Search city" autoFocus="on" />
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
    </div>
  );
}
