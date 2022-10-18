import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
              width="68"
              height="68"
            />
            <WeatherUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
