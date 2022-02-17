import React from "react";

const login = (userInfo) => {
  return {
    type: "LOGIN",
    payload: userInfo,
  };
};

export default login;
