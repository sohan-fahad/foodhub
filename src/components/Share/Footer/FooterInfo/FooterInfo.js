import React from "react";
import "./FooterInfo.css";

const FooterInfo = () => {
  return (
    <div className="FooterInfo">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h3>Logo Here</h3>
            <p>
              The main reason for using lorem ipsum text is that it keeps people
              from focusing on the actual text. When someone creates a template
              and asks for feedback on it, they don't want the people
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h1>Other Pages</h1>
            <ul className="footerNav">
              <li>Privacy Policy</li>
              <li>Security</li>
              <li>Cashback Program</li>
              <li>Terms & Conditions</li>
              <li>Partner with us</li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12">
            <h1>Our Location</h1>
            <ul className="footerNav">
              <li>234 Main Street, Uni 01, New Mexico City</li>
              <li>Mon - Fri: 08:00 am - 10:00 pm</li>
              <li>Sat - Sun: 10:00 am - 11:00 pm</li>
              <li>+01 (234) 56 56 789</li>
              <li>help@foodhub.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
