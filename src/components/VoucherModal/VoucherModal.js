import React from "react";
import { Modal } from "react-bootstrap";

const VoucherModal = ({ show, handleClose }) => {
  const closeVoucherModel = {
    position: "absolute",
    top: "30px",
    right: "30px",
    color: "var(--primary)",
    cursor: "pointer",
    fontSize: "30px",
  };
  return (
    <div className="VoucherModal">
      <div className="voucher_modal_wrapper">
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body className="p-5" style={{ position: "relative" }}>
            <i
              className="fas fa-times"
              style={closeVoucherModel}
              onClick={handleClose}
            ></i>
            <h4
              className="fw-bold mt-3"
              style={{ color: "var(--title)", marginBottom: "30px" }}
            >
              Voucher details
            </h4>
            <p>Tk 125 off your first FoodHub order!</p>
            <p>New and existing customers</p>
            <p>Valid from Dec 27, 2021 - Jan 10, 2022</p>
            <h4
              className="mt-5 fw-bold"
              style={{ color: "var(--title)", marginBottom: "30px" }}
            >
              Terms & Conditions
            </h4>
            <p>Valid for a minimum order of Tk250</p>
            <p>Valid only for the selected vendors.</p>
            <p>Valid only for the selected chains.</p>
            <p>Limited to 1 redemption per user.</p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default VoucherModal;
