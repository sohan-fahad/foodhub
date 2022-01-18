import React from "react";
import "./FooterSocialIcon.css";
import PaymentImg from "../../../../images/card_img.png";
import SocialLink from "../../SocialLink/SocilalLink";

const FooterSocialIcon = () => {
  return (
    <div className="FooterSocialIcon">
      <div className="container">
        <div className="footer_icon_wrapper">
          <div className="footer_Payment_Info">
            <h3 className="me-3 text-light fw-bold">Payment Options</h3>
            <img src={PaymentImg} alt="Payment Image" />
          </div>
          <div className="footer_social_info">
            <h3 className=" text-light fw-bold">Find Us</h3>
            <SocialLink></SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSocialIcon;
