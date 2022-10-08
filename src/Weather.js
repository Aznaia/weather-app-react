import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Seattle</h1>
      <ul>
        <li>Day Time</li>
        <li>Description</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fheavy-rain-icon-vector-21081813&psig=AOvVaw10XVS2UIU8u0sruKHRObjF&ust=1665280464198000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDY3qXDz_oCFQAAAAAdAAAAABAJ"
            alt="rainy"
          />
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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
