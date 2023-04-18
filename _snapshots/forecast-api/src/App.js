import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Mukona21/React-Weather-App-Final-Project.git" target="_blank">
            Mutshinye Nethengwe
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mukona21/React-Weather-App-Final-Project.git"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/teams/mukona21/overview"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}