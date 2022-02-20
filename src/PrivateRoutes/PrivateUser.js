import { Navigate, Outlet } from "react-router";

const PrivateUser = () => {
  const user = localStorage.getItem("user");
  const cartItems = JSON.parse(localStorage.getItem("cartItems"))

  return user ? <Outlet /> : <Navigate to="/auth/new" />;
};

export default PrivateUser;
