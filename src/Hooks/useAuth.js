import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useRoutes } from "react-router";
import checkAuth from "../store/action/checkAuth";
import { headerCartQuantity } from "../store/action/totalQuantity";
import useApi from "./useApi";

const useAuth = () => {

  const [control, setControl] = useState(true)

  const { foodHubAPI } = useApi()
  const dispatch = useDispatch()
  const userDetails = { refreshToken: JSON.parse(localStorage.getItem("user")) };
  const userInfo = userDetails?.refreshToken

  //add data we are interested in tracking to an array

  const currentTime = new Date();
  const expireTime = currentTime.setHours(currentTime.getHours() + 24);

  const handleExpirerTIme = () => {
    localStorage.setItem("expire_session", expireTime)
  }


  useEffect(() => {
    const currentTime = new Date()
    const currentSession = currentTime.setHours(currentTime.getHours())
    const preSession = localStorage.getItem("expire_session")
    const orderQuantity = JSON.parse(localStorage.getItem("qtnty"))
    // headerCartQuantity

    if (orderQuantity) {
      dispatch(headerCartQuantity(orderQuantity?.totalQuantity, orderQuantity?.restaurantPath))
    }


    if (preSession) {
      dispatch(checkAuth(userInfo.user))
      if (preSession < currentSession) {
        localStorage.removeItem("user")
        localStorage.removeItem("expire_session")
        localStorage.removeItem("headerPopup")
      }

      else if (preSession > currentSession) {
        localStorage.setItem("expire_session", expireTime)
        const userData = {
          ...userInfo
        };
        fetch(`${foodHubAPI}/auth/refreshtoken`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "refreshToken": `${userInfo?.refreshToken}`
          },
          body: JSON.stringify(userData),
        })
          .then(res => res.json())
          .then(data => {
            const userCredential = {
              ...userInfo, ...data
            }
            localStorage.setItem("user", JSON.stringify(userCredential))
          })
      }
    }
  }, [userDetails])








  return {
    handleExpirerTIme,
    setControl,
    control
  };
};

export default useAuth;
