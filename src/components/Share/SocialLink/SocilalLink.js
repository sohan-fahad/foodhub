import React from "react";
import "./SocilalLink.css";

const SocilalLink = () => {
  return (
    <div>
      <div className="social_menu_icon">
        <a target="_blank" href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a target="_blank" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a target="_blank" href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a target="_blank" href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default SocilalLink;
