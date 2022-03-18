import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const tenant = window.location.hostname.split(".app.ebratz.com")[0];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You are accessing using {tenant} tenant.</p>
      </header>
    </div>
  );
}

export default App;
