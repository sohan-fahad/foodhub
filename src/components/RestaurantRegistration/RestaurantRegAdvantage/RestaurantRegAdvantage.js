import React from "react";
import "./RestaurantRegAdvantage.css";
import DeliveryBoy from "../../../images/deliveryBoy.jpg";

const RestaurantRegAdvantage = () => {
  return (
    <div className="RestaurantRegAdvantage">
      <div className="row">
        <div className="col-lg-4 col-12 p-0">
          <div className="RestaurantRegAdvantage_img">
            <img src={DeliveryBoy} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-8 col-12">
          <div className="container" style={{ height: "100%" }}>
            <div className="RestaurantRegAdvantage_info">
              <h3>Advantage of Joining Us</h3>
              <h5>More Revenue</h5>
              <p>
                With Food Hub, you will gain an additional source of income. Our
                customers are continually searching the latest cool restaurants
                in their city.
              </p>
              <h5>Dedicated Support</h5>
              <p>
                From perfecting your delivery menu and sending out weekly
                reports, to improving your performance, we're here to help you
                every step of the way.
              </p>
              <h5>Constant Flexibility</h5>
              <p>
                Pause orders if you're feeling overwhelmed. You decide for
                yourself when you want to cook for your food lovers and are free
                to leave on a monthly basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantRegAdvantage;
