import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Vouchers.css";
import VoucherModal from "../VoucherModal/VoucherModal";
import useMethod from "../../Hooks/useMethod";

const ActiveVouchers = ({}) => {
  const { show, setShow, handleClose, handleShow } = useMethod();
  return (
    <div className="Vouchers">
      <div className="vouchers_wrapper">
        <div className="vouchers_info">
          <p>Tk 125 off your first Foodhub order! </p>
          <p className="brand_color fw-bold">vouchers code : Freeship</p>
          <p>Valid until Jan 10, 2022</p>
          <p>Tk 250 Min. order</p>
        </div>
        <div className="vouchers_btn">
          <p>BDT 125</p>
          <button onClick={handleShow}>T&C</button>
        </div>
      </div>

      {/* Modal */}
      <VoucherModal show={show} handleClose={handleClose}></VoucherModal>

      {/* <Modal show={show} onHide={handleClose}></Modal> */}
    </div>
  );
};

export default ActiveVouchers;
