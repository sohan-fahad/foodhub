import React from "react";
import { Modal } from "react-bootstrap";
import "./LocationUpdateModal.css";

const LocationUpdateModal = ({ show, handleClose }) => {
  return (
    <div className="LocationUpdateModal">
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        centered
        size="lg"
      >
        <div className="LocationUpdateModal_wrapper">
          <i class="fas fa-times" onClick={handleClose}></i>
          <h3>Is this your exact location?</h3>
          <input type="text" placeholder="Enter location" />
        </div>
      </Modal>
    </div>
  );
};

export default LocationUpdateModal;
