import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import closeHeaderPopup from "../../../store/action/closeHeaderPopup";
import "./TopMenu.css";

const TopMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handlePopUpNavigate = () => {
    dispatch(closeHeaderPopup())
    localStorage.setItem("headerPopup", true)
    navigate("/corporate")
  }
  const handleHeaderPopup = () => {
    dispatch(closeHeaderPopup())
    localStorage.setItem("headerPopup", true)
  }
  return (
    <div className="top_menu">
      <i onClick={handleHeaderPopup} className="fas fa-times"></i>
      <div className="container">
        <div className="top_menu_container">
          <h1 className="me-5">Do you need a business account?</h1>
          <button onClick={handlePopUpNavigate}>SING UP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
