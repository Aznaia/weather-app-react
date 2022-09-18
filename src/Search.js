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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
