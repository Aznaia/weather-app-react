import React from "react";
import "./Weather.css";
import Search from "./Search.js";

export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <h1>Seattle</h1>
      <ul>
        <li>Day Time</li>
        <li>Description</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://freepngimg.com/thumb/heart/91984-blue-heart-drop-cloud-rain-png-file-hd.png"
              alt="rainy"
              className="float-left"
              width="64"
              height="64"
            />
            <span className="temperature">10</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: </li>
            <li>Humidity: </li>
            <li>Wind: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
