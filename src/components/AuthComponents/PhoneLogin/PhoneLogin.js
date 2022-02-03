import React, { useRef, useState } from "react";
import BackBtn from "../../Share/BackBtn/BackBtn";
import "./PhoneLogin.css";
import emailImg from "../../../images/email .png";
import { useForm } from "react-hook-form";
import useApi from "../../../Hooks/useApi";
import { useNavigate } from "react-router";
import { Spinner } from "react-bootstrap";

const PhoneLogin = () => {
  const { register, handleSubmit, trigger, watch } = useForm();
  const { foodHubAPI } = useApi();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [number, setNumber] = useState("");


  const handleNumber = (e) => {
    const phoneNumber = e.target.value;
    setNumber(phoneNumber);
  };




  const onSubmit = (data) => {
    setIsLoading(true);
    setIsLoading(false);
    fetch(`${foodHubAPI}/user/check-phone-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("number", number);
        if (data.status === "success") {
          setIsLoading(false);
          navigate("/auth/phone/password");
        } else {
          setIsLoading(false);
          navigate("/auth/phone/registration");
        }
      });
  };

  return (
    <div className="EmailLogin">
      {isLoading === true && (
        <div className="emailLogin_wrapper">
          <BackBtn></BackBtn>
          <img src={emailImg} alt="" className="email_login_img" />
          <h3>What's your mobile number?</h3>
          <p>We'll check if you have an account.</p>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <input
              {...register("phone")}
              type="number"
              id=""
              placeholder="Mobile Number"
              required
              onChange={handleNumber}
              onKeyDown={handleNumber}
            />
            <input type="submit" value="CONTINUE" />
          </form>
        </div>
      )}
      {!isLoading && (
        <div>
          <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default PhoneLogin;
