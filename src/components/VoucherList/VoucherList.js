import React from "react";
import Vouchers from "../Vouchers/Vouchers";
import "./VoucherList.css";

const VoucherList = () => {
  return (
    <div className="VoucherList" id="vouchers">
      <div className="voucher_list_wrapper">
        <h1>VOUCHERS</h1>
        <h3>Current</h3>
        <Vouchers></Vouchers>
        <h3 className="mt-5">Past</h3>
        <Vouchers></Vouchers>
      </div>
    </div>
  );
};

export default VoucherList;
