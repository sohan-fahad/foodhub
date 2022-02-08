import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackBtn from "../../Share/BackBtn/BackBtn";
import "./LoginPassword.css";
import loginImg from "../../../images/loginImg.png";
import { Nav, Spinner } from "react-bootstrap";
import useMethod from "../../../Hooks/useMethod";
import useApi from "../../../Hooks/useApi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import checkAuth from "../../../store/action/checkAuth";
import useAuthentication from "../../../Hooks/useAuthentication"




const LoginPassword = () => {
  const number = localStorage.getItem("number");
  const [password, setPassword] = useState("");
  const { showPassword } = useMethod();
  const { foodHubAPI } = useApi();
  const { handleExpirerTIme } = useAuthentication()
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const handlePassword = (e) => {
    const user_password = e.target.value;
    setPassword(user_password);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const userInfo = {
      phone: number,
      ...data,
    };
    setIsLoading(false);
    fetch(`${foodHubAPI}/auth/signin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.removeItem("number")
          handleExpirerTIme()
          dispatch(checkAuth(data.user));
          navigate("/user/profile");
          reset();
        } else {
          alert("Error");
        }
      });
  };
  return (
    <div className="LoginPassword" id="login">
      {isLoading && (
        <div className="login_password_wrapper">
          <BackBtn></BackBtn>
          <img src={loginImg} alt="" className="login_password_img" />
          <h3>Welcome Back!</h3>
          <p>Enter Your Password.</p>
          <h5>{number}</h5>
          <Nav.Link as={Link} to="#">
            Forget Your Password?
          </Nav.Link>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="password"
              name="email"
              id="showInputPassword"
              placeholder="Password"
              {...register("password")}
              onKeyDown={handlePassword}
              required
            />
            <label
              className="disable-select"
              id="showPasswordBtn"
              onClick={() =>
                showPassword("showPasswordBtn", "showInputPassword")
              }
            >
              SHOW
            </label>
            <input type="submit" value="LOGIN" />
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

export default LoginPassword;
