import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Weather Search Engine</h1>
        <Weather />
        <footer>
          <p>
            Coded By Carly B on{" "}
            <a
              href="https://github.com/Aznaia/weather-app-react"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and hosted by{" "}
            <a
              href="https://app.netlify.com/sites/meek-klepon-fc456b/overview"
              target="_blank"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
