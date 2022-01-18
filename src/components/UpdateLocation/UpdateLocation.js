import React from "react";
import { Modal } from "react-bootstrap";
import "./UpdateLocation.css";

const UpdateLocation = ({ show, handleClose }) => {
  const updateLocationFormContainer = {
    width: "90%",
    padding: "15px",
    border: "1px solid var(--primary)",
    display: "flex",
    justifyContent: "space-between",
  };

  const updateLocationFormInput = {
    width: "100%",
    border: "none",
    outline: "none",
  };
  return (
    <Modal
      show={show}
      onHide={handleClose}
      closeButton
      size="lg"
      animation="false"
    >
      <form
        style={{ padding: "15px", display: "flex", justifyContent: "center" }}
      >
        <div style={updateLocationFormContainer}>
          <input
            style={updateLocationFormInput}
            type="text"
            placeholder="Enter Your Address"
            defaultValue="Banaree, Rampura, Dhaka"
          />
          <div style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="var(--primary)"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
            </svg>
          </div>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "var(--primary)",
            padding: "17px 25px",
            border: "none",
            color: "#fff",
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </Modal>
  );
};

export default UpdateLocation;
