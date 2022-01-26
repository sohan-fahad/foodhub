import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import checkAuth from "../store/action/checkAuth";

const useAuthChecker = () => {
  const dispatch = useDispatch();
  const [header, setHeader] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (userDetails) {
      dispatch(checkAuth(userDetails.payload));
      setHeader(true);
      console.log(header);
    }
  }, []);
  return { header };
};

export default useAuthChecker;
