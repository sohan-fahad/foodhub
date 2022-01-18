import React from "react";
import "./WithLogin.css";

const WithLogin = ({ icon, btnName }) => {
  const login_with_btn_bg = {
    backgroundImage: `${icon}`,
  };
  return (
    <button type="button" className="login-with-btn" style={login_with_btn_bg}>
      Sign in with {btnName}
    </button>
  );
};

export default WithLogin;
