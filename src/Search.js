import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setMessage(`It is 19°F in ${city}.`);
    } else {
      setMessage("Enter a city.");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search-bar">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Type a city"
              className="form-control"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
