import React from "react";
import { useNavigate } from "react-router";
import "./BackBtn.css";

const BackBtn = ({ goBack }) => {
  const navigate = useNavigate();
  return (
    <button className="BackBtn" onClick={() => navigate(-1)}>
      <i className="fas fa-arrow-left"></i>
    </button>
  );
};

export default BackBtn;
