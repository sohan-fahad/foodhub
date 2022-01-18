import React from "react";
import "./AboutRestaurant.css";

const AboutRestaurant = () => {
  const iframe =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5754211830317!2d90.43406231425469!3d23.76251539423196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b809fd8d4487%3A0x7c9b3001d76ccc77!2sFarazy%20Hospital%20Ltd.!5e0!3m2!1sen!2snl!4v1642416797117!5m2!1sen!2snl";
  return (
    <div className="AboutRestaurant">
      <div className="row">
        <div className="col-6">
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="fw-bold mb-0">Delivery hours</p>
              <p>Mon - Sun 8:00 AM - 11:00 PM</p>
            </div>
            <div className="mt-3">
              <p className="fw-bold mb-0">Address</p>
              <p>2/3 East Rampura DIT Road, 1219 Dhaka</p>
            </div>
          </div>
        </div>
        <div className="col-6 pb-3">
          <iframe src={iframe} style={{ width: "100%" }}></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutRestaurant;
