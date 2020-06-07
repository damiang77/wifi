import React, { useEffect, useState } from "react";
import "./App.css";
import Printout from "./components/Printout/Printout";

const App = () => {
  const [ssid, SetSsid] = useState("Name");
  const [password, setPassword] = useState("Your password");
  const [encryption, setEncryption] = useState("WPA");
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    setQrValue(`WIFI:S:${ssid};T:${encryption};P:${password};;`);
  }, [ssid, password, encryption]);

  return (
    <div className="container">
      <div className="row">
        <h1>Wi-Fi</h1>
        <p className="header-p">password card generator</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
            You can print a simple card with your wi-fi network login details.
            Easy wi-fi access for your guests.
          </p>
          <p className="note">We do not store your Wi-Fi crendentials!</p>
          <form className="input-form">
            <div className="input-box">
              <label for="name">Enter your network name: </label>
              <input
                type="text"
                id="name"
                onChange={(e) => SetSsid(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label for="password">Enter network password: </label>
              <input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label for="name">Encryption:</label>
              <div className="dropdown">
                <select
                  className="dropdown-select"
                  onChange={(e) => setEncryption(e.target.value)}
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <div className=" printout-wrapper">
            <h3 className="">Your printout</h3>
            <div className="action-btn-wrapper">
              <button className="action-btn" onClick={window.print}>
                Print
              </button>
            </div>
            <Printout ssid={ssid} password={password} qrValue={qrValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
