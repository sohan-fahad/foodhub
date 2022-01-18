import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import SocilalLink from "../SocialLink/SocilalLink";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <div className="top_menu">
      <div className="container">
        <div className="top_menu_container">
          <SocilalLink></SocilalLink>
          <div>
            <button>EN</button>
            <button>BN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
