import React, { useEffect, useState } from "react";
import "./App.css";
import Printout from "./components/Printout/Printout";

const App = () => {
  const [ssid, SetSsid] = useState("Name");
  const [password, setPassword] = useState("Your password");
  const [encryption, setEncryption] = useState("WPA");
  const [qrValue, setQrValue] = useState("");
  const [image, setImage] = useState(null)

  useEffect(() => {
    setQrValue(`WIFI:S:${ssid};T:${encryption};P:${password};;`);
  }, [ssid, password, encryption]);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div className="container ">
      <div className="row mobile-header">
        <h1 className="logo">Wi-Fi</h1>
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
              <label htmlFor="name">Enter your network name: </label>
              <input
                type="text"
                id="name"
                onChange={(e) => SetSsid(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Enter network password: </label>
              <input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="encryption">Encryption:</label>
              <div className="dropdown">
                <select
                id="encryption"
                  className="dropdown-select"
                  onChange={(e) => setEncryption(e.target.value)}
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                </select>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="img">Upload your logo:</label>
              <input
                type="file"
                name="image-upload"
                id="img"
                className="image-upload"
                accept="image/*"
                onChange={imageHandler}
              />
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
            <Printout ssid={ssid} password={password} qrValue={qrValue} image={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
