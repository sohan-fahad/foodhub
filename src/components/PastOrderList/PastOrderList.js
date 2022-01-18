import React from "react";
import "./PastOrderList.css";

const PastOrderList = () => {
  return (
    <div className="PastOrderList">
      <div className="past_order_list_info">
        <h3>Restaurant Name</h3>
        <p>
          Deliver by <span className="fw-bold">Food Hub</span>
        </p>
        <p>Oct 7, 2021</p>
        <p>2x Platter One</p>
      </div>
      <div className="past_order_list_btn">
        <p>BDT 266254</p>
        <button>REORDER</button>
      </div>
    </div>
  );
};

export default PastOrderList;
