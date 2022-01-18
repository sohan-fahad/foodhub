import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import BackBtn from "../../Share/BackBtn/BackBtn";
import "./EmailLogin.css";
import emailImg from "../../../images/email .png";
import { useForm } from "react-hook-form";
import useApi from "../../../Hooks/useApi";
import { useNavigate } from "react-router";
import useAuthentication from "../../../Hooks/useAuthentication";
import { Spinner } from "react-bootstrap";

const EmailLogin = () => {
  const { register, handleSubmit, watch } = useForm();
  const { foodHubAPI } = useApi();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const { handleEmail, setAuth, email } = useAuthentication();

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    fetch(`${foodHubAPI}/user/check-email-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setAuth(true);

        localStorage.setItem("email", email);
        if (data.statusCode === 404) {
          setIsLoading(false);
          navigate("/registration#registration");
        } else {
          setIsLoading(false);
          navigate("/login/user#login");
        }
      });
  };

  return (
    <div className="EmailLogin">
      {isLoading === true && (
        <div className="emailLogin_wrapper">
          <BackBtn></BackBtn>
          <img src={emailImg} alt="" className="email_login_img" />
          <h3>What's your email?</h3>
          <p>We'll check if you have an account.</p>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <input
              {...register("email")}
              type="email"
              id=""
              placeholder="Email"
              required
              onChange={handleEmail}
            />
            <input type="submit" value="CONTINUE" />
          </form>
        </div>
      )}
      {!isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default EmailLogin;
