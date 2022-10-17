import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Search from "./Search.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <Search />
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
                width="64"
                height="64"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e937ae3f7a274820b678821bd8a9635d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
