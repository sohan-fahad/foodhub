import React from "react";
import "./DownloadApp.css";
import AppImg from "../../../images/PhoneMockup.png";
import AppleStore from "../../../images/AppleStore.png";
import PlayStore from "../../../images/PlayStore.png";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className="DownloadApp">
      <div className="container">
        <h1>Download Our App</h1>
        <p>the process of our service</p>
        <div className="row g-4">
          <div className="col-lg-6 col-xs-12">
            <img src={AppImg} className="img-fluid w-100" alt="" />
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="App_info">
              <h3>Your desire food Is now In your hand</h3>
              <p>Download! to get this app Faster way to order food</p>
              <div className="AppLinkImg">
                <div className="row">
                  <div className="col-6">
                    <Link to="#">
                      <img
                        src={AppleStore}
                        alt=""
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="#">
                      <img src={PlayStore} alt="" className="img-fluid w-100" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
