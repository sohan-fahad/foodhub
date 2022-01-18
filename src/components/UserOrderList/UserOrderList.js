import React from "react";
import ActiveOrderList from "../ActiveOrderList/ActiveOrderList";
import PastOrderList from "../PastOrderList/PastOrderList";
import "./UserOrderList.css";

const UserOrderList = () => {
  return (
    <div className="UserOrderList" id="order">
      <div className="user_order_list_wrapper">
        <div className="user_active_order_list">
          <h3>Active Orders</h3>
          <ActiveOrderList></ActiveOrderList>
          <h3 className="mt-5">Past Orders</h3>
          <PastOrderList></PastOrderList>
        </div>
      </div>
    </div>
  );
};

export default UserOrderList;
