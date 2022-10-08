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
      <div className="row">
        <div className="col-6">
          <img src={"./Rainy.png"} alt="rainy" />
          Temp
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
