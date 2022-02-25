import React from "react";
import "./DownloadApp.css";
import AppImg from "../../../images/PhoneMockup.png";
import AppleStore from "../../../images/AppleStore.png";
import PlayStore from "../../../images/PlayStore.png";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div className="DownloadApp">
      <div className="DownloadApp_bg"></div>
      <div className="container">
        <div className="DownloadApp_title">
          <h3>App</h3>
          <p>Put us in your pocket</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-xs-12">
            <div className="App_info">
              <h4>Your desire food Is now In your hand</h4>
              <h5>It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</h5>
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
          <div className="col-lg-6 col-xs-12">
            <div className="DownloadApp_img_wrapper">
              <img src={AppImg} className="DownloadApp_img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
