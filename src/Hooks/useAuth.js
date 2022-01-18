import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useRoutes } from "react-router";
import useApi from "./useApi";

const useAuth = () => {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState("");
  const [restaurantPath, setRestaurantPath] = useState(false);

  const handleEmail = (e) => {
    const user_email = e.target.value;
    setEmail(user_email);
  };

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (userDetails) {
      const { payload } = userDetails;
      if (payload.token) {
        setUserInfo(payload);
        setUser(true);
      }
    } else {
      setUserInfo({});
      setUser(false);
    }
  }, []);

  return {
    user,
    setUser,
    userInfo,
    setUserInfo,
    isLoading,
    setIsLoading,
    setAuth,
    auth,
    email,
    handleEmail,
    setRestaurantPath,
    restaurantPath,
  };
};

export default useAuth;
