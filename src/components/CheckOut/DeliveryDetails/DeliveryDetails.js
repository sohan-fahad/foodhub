import React, { useState } from "react";
import LocationUpdateModal from "../LocationUpdate/LocationUpdateModal";
import "./DeliveryDetails.css";

const DeliveryDetails = () => {
  const iframe =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5754211830317!2d90.43406231425469!3d23.76251539423196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b809fd8d4487%3A0x7c9b3001d76ccc77!2sFarazy%20Hospital%20Ltd.!5e0!3m2!1sen!2snl!4v1642416797117!5m2!1sen!2snl";

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="DeliveryDetails">
      <div className="DeliveryDetails_title">
        <span>1</span>
        <h3 className="ms-3 mb-0">Delivery details</h3>
      </div>
      <form>
        <div className="DeliveryDetails_contactless">
          <div>
            <h5>Contactless delivery</h5>
            <p>
              To keep you safe, the rider will place your order at your door
            </p>
          </div>
          <div className="p-3">
            <label class="DeliveryDetails_switch">
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
          <h5>Delivery address</h5>
          <div className="DeliveryDetails_address_map">
            <iframe src={iframe} style={{ width: "100%" }} disable></iframe>
            <div className="DeliveryDetails_address_info">
              <div>
                <h5>602 Mogbazar Municipal Market Rd</h5>
                <p>Dhaka</p>
              </div>
              <button onClick={handleShow}>Edit</button>
            </div>
          </div>
          <div className="DeliveryDetails_additional_info">
            <input type="text" placeholder="Apartment #" />
            <textarea
              name=""
              placeholder="Note to rider - e.g floor/direction/landmark"
            ></textarea>
          </div>
          <h5 className="mt-3">Add labels</h5>
          <div className="DeliveryDetails_labels">
            <div className="DeliveryDetails_label">
              <input
                type="radio"
                id="home"
                value="home"
                name="custom-radio-btn"
              />
              <label htmlFor="home">
                <i class="fas fa-home"></i>
              </label>

              <p htmlFor="home">Home</p>
            </div>
            <div className="DeliveryDetails_label">
              <input
                type="radio"
                id="office"
                value="office"
                name="custom-radio-btn"
              />
              <label htmlFor="office">
                <i class="fas fa-briefcase"></i>
              </label>

              <p>Office</p>
            </div>
            <div className="DeliveryDetails_label">
              <input
                type="radio"
                id="partner"
                value="office"
                name="custom-radio-btn"
              />
              <label htmlFor="partner">
                <i class="far fa-heart"></i>
              </label>

              <p>Partner</p>
            </div>
            <div className="DeliveryDetails_label">
              <input
                type="radio"
                id="others"
                value="office"
                name="custom-radio-btn"
              />
              <label htmlFor="others">
                <i class="fas fa-plus"></i>
              </label>

              <p>Others</p>
            </div>
          </div>
          <div className="DeliveryDetails_label_others">
            <input type="text" placeholder="Custom" />
          </div>
          <input
            className="DeliveryDetails_submit"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
      <LocationUpdateModal
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
      ></LocationUpdateModal>
    </div>
  );
};

export default DeliveryDetails;
