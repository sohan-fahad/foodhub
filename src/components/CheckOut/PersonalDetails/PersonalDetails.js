import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import useApi from "../../../Hooks/useApi";
import checkAuth from "../../../store/action/checkAuth";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  // const [user, setUser] = useState({})

  const [userState, setUserState] = useState(true)

  const { register, handleSubmit, reset } = useForm();

  const { foodHubAPI } = useApi()

  const { user } = useSelector((state) => state.authCheckReducer)

  const userDetails = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()

  useEffect(() => {
    reset(user)
    if (user) {
      setUserState(true)
    }
  }, [])

  // this function will update user info 
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
    <div className="PersonalDetails">
      <div className="PersonalDetails_title">
        <div className="d-flex align-items-center">
          <span>2</span>
          <h3 className="ms-3 mb-0">Personal details</h3>
        </div>
        {
          userState &&
          <button onClick={() => setUserState(false)}>
            <i class="far fa-edit me-2"></i>
            EDIT
          </button>
        }

      </div>
      {
        userState &&
        <div className="mt-5">
          <h5 className="fw-bold m-0 brand_color">{user?.firstName} {user?.lastName}</h5>
          <p className="m-0 second_title">{user?.email}</p>
          <p className="m-0 second_title">{user?.phone}</p>
        </div>
      }
      {
        !userState &&
        <form onSubmit={handleSubmit(handleUpdateInfo)}>
          <label className="second_title mb-2">First Name</label>
          <input
            type="text"
            name=""
            placeholder="Email"
            defaultValue={user?.firstName}
            {...register("firstName")}
          />
          <label className="second_title mb-2">Last Name</label>
          <input
            type="text"
            name=""
            placeholder="Last name"
            defaultValue={user?.lastName}
            {...register("lastName")}
          />
          <label className="second_title mb-2">Email</label>
          <input
            type="text"
            name=""
            placeholder="Last name"
            defaultValue={user?.email}
            {...register("email")}
          />
          <label className="second_title mb-2">Mobile</label>
          <input
            type="number"
            name=""
            placeholder="Mobile number"
            defaultValue={user?.phone}
            {...register("phone")}
          />
          <label className="second_title mb-2">Birthdate</label>
          <input
            type="date"
            name=""
            placeholder="Mobile number"
            {...register("date_of_birth")}
          />
          <input type="submit" value="SAVE" />
        </form>
      }
    </div>
  );
};

export default PersonalDetails;
