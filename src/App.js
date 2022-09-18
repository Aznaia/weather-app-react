import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <Search />
        <footer>
          <p>
            Coded By Carly B on{" "}
            <a href="https://github.com/Aznaia/weather-app-react">GitHub</a> and
            hosted by{" "}
            <a href="https://app.netlify.com/sites/meek-klepon-fc456b/overview">
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
