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
          <svg class="svg-stroke-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#fff" >
            <path className="rider-icon__path" d="M44.66,9.09,31.19,5.18a4.66,4.66,0,0,0-2.59,0L11,10.13a4.62,4.62,0,0,0-3.37,4.36s0,0,0,.07v4C4.51,21.9.1,27.21,0,31.91A10.57,10.57,0,0,0,0,33a5,5,0,0,0,2.69,4.08,5.66,5.66,0,0,0,2.64.65,13.73,13.73,0,0,0,4.27-1,7.73,7.73,0,0,0,3.7,5.55A5.41,5.41,0,0,0,16,43a17.66,17.66,0,0,0,5.93-1.66l1.16.58a4.66,4.66,0,0,0,2.07.48,4.55,4.55,0,0,0,1.26-.17l18.16-5.91A4.62,4.62,0,0,0,48,31.87V13.51A4.64,4.64,0,0,0,44.66,9.09Zm-33.35,2,9-2.52,13.18,3.83A3.62,3.62,0,0,1,36,15.86v5L26.28,24V18.37a2.56,2.56,0,0,0-1.92-2.44L11.17,12.1a2.85,2.85,0,0,0-1.45,0A3.64,3.64,0,0,1,11.31,11.11ZM4.79,36a4,4,0,0,1-2.14-3.89c.17-2.62,2.47-5.88,5-8.82V33a2.53,2.53,0,0,0,1.52,2.29l.39.18c0,.1,0,.21,0,.32C7.84,36.31,6.09,36.61,4.79,36Zm16,4.75c-2,.66-4.14,1-5.61.37a4.89,4.89,0,0,1-3-4.48v0l4.23,2,4.58,2.13Zm2-.31-6-2.78-4.58-2.13s0-.08,0-.12c.91-4.8,6.24-12.14,9.08-15.16a1,1,0,0,0-.42-1.68l-1.21-.41a1,1,0,0,0-1.07.28c-1.78,1.95-7.92,9.28-8.92,15.48,0,.14-.06.28-.07.41l0,0A1.51,1.51,0,0,1,8.69,33V22.13c1.64-1.81,3.26-3.43,4.38-4.62a1,1,0,0,0-.43-1.68l-1.2-.41a1,1,0,0,0-1.08.28c-.36.4-.95,1-1.67,1.74v-3a1.5,1.5,0,0,1,.62-1.14A1.74,1.74,0,0,1,10.37,13a1.79,1.79,0,0,1,.51.07l13.19,3.83a1.55,1.55,0,0,1,1.17,1.46V39.08a1.48,1.48,0,0,1-.72,1.26A1.84,1.84,0,0,1,22.8,40.45ZM47,31.87a3.6,3.6,0,0,1-2.7,3.46L26.11,41.24a3.25,3.25,0,0,1-1.35.1,1.41,1.41,0,0,0,.31-.14,2.49,2.49,0,0,0,1.21-2.12v-5.5L47,27.11Zm0-14.5-9.89,3.16V15.86a4.64,4.64,0,0,0-3.34-4.42L22.12,8.06l6.76-1.91a3.77,3.77,0,0,1,1-.14,3.55,3.55,0,0,1,1,.15l13.47,3.92A3.59,3.59,0,0,1,47,13.51Z"></path>
          </svg>
          <h1 className="me-5">Do you need a business account?</h1>
          <button onClick={handlePopUpNavigate}>SING UP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
