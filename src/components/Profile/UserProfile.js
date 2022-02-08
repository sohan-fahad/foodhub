import React, { useEffect, useRef, useState } from "react";
import "./UserProfile.css";
import bkashImg from "../../images/bKashIcon.png";
import useMethod from "../../Hooks/useMethod";
import { useDispatch, useSelector } from "react-redux";
import useApi from "../../Hooks/useApi";
import { useForm } from "react-hook-form";
import checkAuth from "../../store/action/checkAuth";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { showPassword } = useMethod();
  const { foodHubAPI } = useApi()
  const { register, handleSubmit, reset } = useForm();

  const userDetails = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()


  const passwordRef = useRef(null)
  const c_passwordRef = useRef(null)

  const password = passwordRef.current;
  const c_password = c_passwordRef.current;

  const handleSuccessAlert = () => {
    Swal.fire({
      icon: 'success',
      title: "Password has been changed",
      showConfirmButton: false,
      timer: 1500
    })
    c_password.value = ""
    password.value = ""
  }

  const { user } = useSelector((state) => state.authCheckReducer)

  useEffect(() => {
    reset(user)
  }, [])

  const handlePasswordUpdate = (e) => {
    e.preventDefault()
    if (password.value === c_password.value) {
      fetch(`${foodHubAPI}/auth/refreshtoken`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "refreshToken": `${userDetails?.accessToken}`
        },
        body: JSON.stringify(userDetails),
      })
        .then(res => res.json())
        .then(data => {
          const userCredential = {
            accessToken: data?.accessToken, refreshToken: data?.refreshToken, id: userDetails?.id, roles: userDetails?.roles, user: userDetails?.user
          }
          localStorage.setItem("user", JSON.stringify(userCredential))
          if (userCredential) {
            fetch(`${foodHubAPI}/user/update-user-password?id=${userDetails?.id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                "x-access-token": `${userCredential?.accessToken}`

              },
              body: JSON.stringify({ password: password.value })
            })
              .then(res => res.json())
              .then(data = handleSuccessAlert())
          }
        })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }


  const handleUpdateInfo = (data) => {
    const updateData = { ...data }
    fetch(`${foodHubAPI}/auth/refreshtoken`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "refreshToken": `${userDetails?.accessToken}`
      },
      body: JSON.stringify(userDetails),
    })
      .then(res => res.json())
      .then(data => {
        const userCredential = {
          accessToken: data?.accessToken, refreshToken: data?.refreshToken, id: updateData?.id, roles: userDetails?.roles, user: updateData
        }
        localStorage.setItem("user", JSON.stringify(userCredential))

        if (userCredential) {
          fetch(`${foodHubAPI}/user/update-user-profile?id=1`, {
            method: "PUT",
            headers: {
              "x-access-token": `${userCredential?.accessToken}`,
              "content-type": "application/json"
            },
            body: JSON.stringify(userCredential?.user),
          })
            .then(res => res.json())
            .then(data => {
              // console.log(object);
              dispatch(checkAuth(data?.payload))
              if (data?.payload) {
                Swal.fire({
                  icon: 'success',
                  title: `${data?.message}`,
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
        }
      })
  }


  return (
    <div className="UserProfile" id="profile">
      <div className="user_profile_wrapper">
        <div className="user_profile_info">
          <h3>MY PROFILE</h3>
          <form onSubmit={handleSubmit(handleUpdateInfo)} autoComplete="off" >
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
              defaultValue={user?.email}
            />

            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              required
              defaultValue={user?.firstName}
            />

            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              required
              defaultValue={user?.lastName}
            />

            <input
              type="number"
              placeholder="Mobile Number"
              {...register("phone")}
              required
              defaultValue={user?.phone}
            />
            <input type="submit" value="SAVE" />
          </form>


        </div>
        <div className="user_profile_info user_profile_password">
          <h3>PASSWORD</h3>

          <form onSubmit={handlePasswordUpdate} autoComplete="off">
            <input
              type="password"
              placeholder="Password"
              id="user_password"
              ref={passwordRef}
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
              id="user_confirm_password"
              placeholder="Confirm Password"
              ref={c_passwordRef}
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
