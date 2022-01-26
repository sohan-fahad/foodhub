import React, { useState } from "react";
import "./HelpCenter.css";
import HelpAccount from "../HelpAccount/HelpAccount";
import HelpRefundOrders from "../HelpRefundOrders/HelpRefundOrders";
import HelpWithOrders from "../HelpWithOrders/HelpWithOrders";

const HelpCenter = () => {
  const [helpCenter, setHelpCenter] = useState("orders");
  return (
    <div className="HelpCenter" id="help">
      <div className="container">
        <h1>Hello, how can we help you?</h1>
        <div className="row g-4">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="help_btn">
              <button
                className={
                  helpCenter === "orders" ? "active_help_btn" : "get_help_btn"
                }
                onClick={() => setHelpCenter("orders")}
              >
                <i className="fas fa-shopping-bag me-4"></i>Get Help with orders
              </button>
              <button
                className={
                  helpCenter === "account" ? "active_help_btn" : "get_help_btn"
                }
                onClick={() => setHelpCenter("account")}
              >
                <i className="fas fa-shopping-bag me-4"></i>My Account
              </button>
              <button
                className={
                  helpCenter === "support" ? "active_help_btn" : "get_help_btn"
                }
                onClick={() => setHelpCenter("support")}
              >
                <i className="fas fa-question me-4"></i>My support requests
              </button>

              <button
                className={
                  helpCenter === "request" ? "active_help_btn" : "get_help_btn"
                }
                onClick={() => setHelpCenter("request")}
              >
                <i className="fas fa-hands-helping me-4"></i>My support requests
              </button>
            </div>
          </div>
          <div
            className="col-lg-8 col-md-8 col-12"
            style={{ position: "relative" }}
          >
            {helpCenter === "orders" && <HelpWithOrders></HelpWithOrders>}
            {helpCenter === "account" && <HelpAccount></HelpAccount>}
            {helpCenter === "support" && <HelpRefundOrders></HelpRefundOrders>}
            {helpCenter === "request" && <HelpRefundOrders></HelpRefundOrders>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
