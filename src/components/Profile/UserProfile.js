import React, { useState } from "react";
import "./UserProfile.css";
import bkashImg from "../../images/bKashIcon.png";
import useMethod from "../../Hooks/useMethod";
import { useSelector } from "react-redux";
import useApi from "../../Hooks/useApi";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const { showPassword } = useMethod();
  const { foodHubAPI } = useApi()
  const { register, handleSubmit, watch, reset } = useForm();

  const userDetails = JSON.parse(localStorage.getItem("user"))



  const { user } = useSelector((state) => state.authCheckReducer)

  let userData = { email: user?.email, firstName: user?.firstName, lastName: user?.lastName, phone: user?.phone }

  const handleEmail = (e) => {
    const updateEmail = { email: e.target.value }
    userData = { ...userData, ...updateEmail }
  }

  const handleFirstName = (e) => {
    const updateFirstName = { firstName: e.target.value }
    userData = { ...userData, ...updateFirstName }
  }
  const handleLastName = (e) => {
    const updateLastName = { lastName: e.target.value }
    userData = { ...userData, ...updateLastName }
  }
  const handlePhone = (e) => {
    const updatePhone = { phone: e.target.value }
    userData = { ...userData, ...updatePhone }
  }

  const handleUpdateUserInfo = (e) => {
    e.preventDefault()
    if (userDetails) {
      fetch(`${foodHubAPI}/user/update-user-profile?id=${user?.id}`, {
        method: "PUT",
        headers: {
          "x-access-token": `${userDetails?.accessToken}`,
          "content-type": "application/json"
        },
        body: JSON.stringify(userData),
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }


  return (
    <div className="UserProfile" id="profile">
      <div className="user_profile_wrapper">
        <div className="user_profile_info">
          <h3>MY PROFILE</h3>
          <form onSubmit={handleUpdateUserInfo} >
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              defaultValue={user?.email}
            />
            <input
              type="text"
              placeholder="First Name"
              onChange={handleFirstName}
              defaultValue={user?.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleLastName}
              defaultValue={user?.lastName}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              onChange={handlePhone}
              defaultValue={user?.phone}
            />
            <input type="submit" value="SAVE" />
          </form>


        </div>
        <div className="user_profile_info user_profile_password">
          <h3>PASSWORD</h3>
          <form>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="user_password"
            />
            <label
              id="show_password"
              className="disable-select"
              onClick={() => showPassword("show_password", "user_password")}
            >
              SHOW
            </label>
            <input
              type="password"
              name="c_password"
              placeholder="Confirm Password"
              id="user_confirm_password"
            />
            <label
              id="show_confirm_password"
              className="disable-select"
              onClick={() =>
                showPassword("show_confirm_password", "user_confirm_password")
              }
            >
              SHOW
            </label>
            <input type="submit" value="SAVE" />
          </form>
        </div>
        <div className="user_profile_payment">
          <h3>MY PAYMENT</h3>
          <div className="user_profile_payment_wrapper">
            <div className="user_profile_payment_info">
              <img src={bkashImg} alt="" />
              <p>0183****500</p>
            </div>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
