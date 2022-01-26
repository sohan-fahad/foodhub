import React from "react";
import Copyright from "../Copyright/Copyright";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterSocialIcon from "../FooterSocialIcon/FooterSocialIcon";

const Footer = () => {
  return (
    <div className="Footer">
      <FooterInfo></FooterInfo>
      <FooterSocialIcon></FooterSocialIcon>
      <Copyright></Copyright>
    </div>
  );
};

export default Footer;
