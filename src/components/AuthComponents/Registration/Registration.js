import React, { useState } from "react";
import "./Registration.css";
import BackBtn from "../../Share/BackBtn/BackBtn";
import registerImg from "../../../images/register.png";
import useMethod from "../../../Hooks/useMethod";
import { useForm } from "react-hook-form";
import useApi from "../../../Hooks/useApi";
import { useNavigate } from "react-router";
import { Spinner } from "react-bootstrap";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import checkAuth from "../../../store/action/checkAuth";
import useAuthentication from "../../../Hooks/useAuthentication";

const Registration = () => {
  const { showPassword } = useMethod();
  const { register, handleSubmit, watch, reset } = useForm();
  const [erorr, setError] = useState();
  const { foodHubAPI } = useApi();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  const { handleExpirerTIme } = useAuthentication()

  const onSubmit = (data) => {
    setIsLoading(true);
    const number = localStorage.getItem("number");
    data = {
      phone: number,
      ...data
    };
    if (data.password !== data.changedPassword) {
      setError("Confirm Password doesn't match");
    } else {
      setIsLoading(false);
      setError("");
      fetch(`${foodHubAPI}/auth/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            dispatch(checkAuth(data.user));
            navigate("/auth/phone/password");
          } else {
            alert("there were some error. Please try again");
          }
        });
    }
  };
  return (
    <div className="Registration" id="registration">
      {isLoading && (
        <div className="registration_container">
          <BackBtn></BackBtn>
          <img src={registerImg} alt="" className="registerImg" />
          <h3>Let's get you started!</h3>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
            <div className="register_user_name">
              <input
                type="text"
                {...register("firstName")}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                {...register("lastName")}
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="password"
              id="user_password"
              placeholder="Password"
              {...register("password")}
              required
            />
            <label
              id="reg_showPassword"
              className="disable-select"
              onClick={() => showPassword("reg_showPassword", "user_password")}
            >
              SHOW
            </label>
            <input
              type="password"
              {...register("changedPassword")}
              id="re_password"
              placeholder="Confirm Password"
              required
            />
            <label
              id="reg_re_showPassword"
              className="disable-select"
              onClick={() => showPassword("reg_re_showPassword", "re_password")}
            >
              SHOW
            </label>
            <label className="mb-3 text-danger">{erorr}</label>
            <input type="submit" value="CONTINUE" />
          </form>
        </div>
      )}
      {!isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default Registration;
