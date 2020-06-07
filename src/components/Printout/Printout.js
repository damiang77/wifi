import React from "react";
import wifi from "./../../img/wifi.svg";
import QRCode from "qrcode.react";

const Printout = (props) => {
  return (
    <div className="printout">
        <div className="printout-logo">
        {props.image ? <img src={props.image}/> : "Your logo"}
        </div>
   
       
      <div className="page-size">A4 Page</div>
      <div>
        <img src={wifi} alt="wifi logo"/>
      </div>
      <div>
        <div className="col-credentials">
          NETWORK
          <p> {props.ssid}</p>
        </div>
        <div className="col-credentials">
          PASSWORD
          <p> {props.password}</p>
        </div>
      </div>
      <div className="qr-code">
        <QRCode value={props.qrValue} />
        <p className="qr-description">Scan to Connect Wi-Fi</p>
      </div>
    </div>
  );
};
export default Printout;
