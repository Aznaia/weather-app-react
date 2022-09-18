import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
