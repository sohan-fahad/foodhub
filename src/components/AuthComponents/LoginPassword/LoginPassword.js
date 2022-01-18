import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackBtn from "../../Share/BackBtn/BackBtn";
import "./LoginPassword.css";
import loginImg from "../../../images/loginImg.png";
import { Nav, Spinner } from "react-bootstrap";
import useMethod from "../../../Hooks/useMethod";
import useApi from "../../../Hooks/useApi";
import { useForm } from "react-hook-form";
import useAuthentication from "../../../Hooks/useAuthentication";
import { useDispatch } from "react-redux";
import login from "../../../store/action/login";

const LoginPassword = () => {
  const email = localStorage.getItem("email");
  const [password, setPassword] = useState("");
  const { showPassword } = useMethod();
  const { foodHubAPI } = useApi();
  const navigate = useNavigate();
  const { setUser, user, setUserInfo, userInfo } = useAuthentication();
  const [isLoading, setIsLoading] = useState(true);

  const { register, handleSubmit, watch, reset } = useForm();

  const dispatch = useDispatch();

  const handlePassword = (e) => {
    const user_password = e.target.value;
    setPassword(user_password);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const userInfo = {
      email,
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
        if (data.status === "success") {
          console.log(data.payload);

          localStorage.setItem("user", JSON.stringify(data));
          dispatch(login(data.payload));
          navigate("/user/name");
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
          <h5>{email}</h5>
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
              onChange={handlePassword}
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
          style={{ height: "100vw" }}
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
