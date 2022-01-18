import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./FilterModal.css";

const FilterModal = ({ show, handleClose }) => {
  // const [set]
  return (
    <div className="FilterModal">
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        centered
        scrollable
      >
        <div className="filter_header p-4">
          <p className="m-0 brand_color">
            <i className="fas fa-sort-amount-down me-2"></i> Filter
          </p>
          <input
            type="text"
            className="filter_item_search"
            value={"Value"}
            disabled
          />
          <div className="d-flex align-items-center">
            <p className="m-0 brand_color" type="button">
              Clear
            </p>
            <i
              type="button"
              className="fas fa-sort-down ms-3 brand_color"
              onClick={handleClose}
            ></i>
          </div>
        </div>
        <hr className="m-0" />
        <p className="ps-4 pt-4 m-0">Sort</p>
        <div className="row p-4">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="d-flex align-items-center filter_radio_check">
              <input type="radio" id="recommended" name="radio-group" />
              <div className="filter_check_box">
                <div className="checked_filter_radio"></div>
              </div>
              <label htmlFor="recommended" className="ms-2 disable-select">
                Recommended
              </label>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="d-flex align-items-center filter_radio_check">
              <input type="radio" id="topRated" name="radio-group" />
              <div className="filter_check_box">
                <div className="checked_filter_radio"></div>
              </div>
              <label htmlFor="topRated" className="ms-2 disable-select">
                Top Rated
              </label>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="d-flex align-items-center filter_radio_check">
              <input type="radio" id="fasterDelivery" name="radio-group" />
              <div className="filter_check_box">
                <div className="checked_filter_radio"></div>
              </div>
              <label htmlFor="fasterDelivery" className="ms-2 disable-select">
                Faster Delivery
              </label>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FilterModal;
