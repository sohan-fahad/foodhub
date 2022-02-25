import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAddressList from "../../../Hooks/useAddressList";
import useApi from "../../../Hooks/useApi";
import useAuthentication from "../../../Hooks/useAuthentication";
import useCheckout from "../../../Hooks/useCheckout";
import LocationUpdateModal from "../LocationUpdate/LocationUpdateModal";
import UserAddressDetail from "../UserAddressDetail/UserAddressDetail";
import UserAddressList from "../UserAddressList/UserAddressList";
import "./DeliveryDetails.css";

const DeliveryDetails = () => {

  const { address, addressArray, addressEdit, handleAddress, cancelAddress, activeAddress, handleShow, handleClose, show, addAddress } = useAddressList()


  return (
    <div className="DeliveryDetails">
      <div className="DeliveryDetails_title">
        <span>1</span>
        <h3 className="ms-3 mb-0">Delivery details</h3>
      </div>

      <div className="DeliveryDetails_contactless">
        <div>
          <h5>Contactless delivery</h5>
          <p>
            To keep you safe, the rider will place your order at your door
          </p>
        </div>
        <div className="p-3">
          <label className="DeliveryDetails_switch">
            <input type="checkbox" /> <div></div>
          </label>
        </div>
      </div>
      <div className="DeliveryDetails_time">
        <h5>Delivery time :</h5>
        <select>
          <option value="">28/01</option>
          <option value="">29/02</option>
        </select>
      </div>
      <div className="DeliveryDetails_address">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Delivery address</h5>
          {
            address &&
            <button className="DeliveryDetails_address_btn" onClick={handleAddress}><i class="fas fa-plus me-2"></i>Add Address</button>
          }
          {
            !address && addressArray.length !== 0 ?
              <button className="DeliveryDetails_address_btn" onClick={cancelAddress}>Cancel</button>
              : ""
          }
        </div>

        {
          address ?
            <UserAddressList
              activeAddress={activeAddress}
            />
            :
            <UserAddressDetail
              handleAddress={addAddress}
            />
        }
        {
          addressEdit &&
          <UserAddressDetail

          />
        }

      </div>
      <LocationUpdateModal
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
      ></LocationUpdateModal>
    </div >
  );
};

export default DeliveryDetails;
