import { Navigate, Outlet } from "react-router";

const PrivateUser = ({ children }) => {
  const user = localStorage.getItem("user");

  return user ? <Outlet /> : <Navigate to="/auth/new" />;
};

export default PrivateUser;
