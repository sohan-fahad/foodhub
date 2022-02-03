import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import checkAuth from "../store/action/checkAuth";

const useAuthChecker = () => {
  const dispatch = useDispatch();
  const [header, setHeader] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem("user"));
  console.log(userDetails);
  useEffect(() => {
    if (userDetails.accessToken) {
      console.log(userDetails);
      dispatch(checkAuth(userDetails.user));
      setHeader(true);
      console.log(header);
    }
  }, []);
  return { header };
};

export default useAuthChecker;
