import { render } from "@testing-library/react";
import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateAuth = ({ children }) => {
  const { user } = useAuth();
  const email = localStorage.getItem("email");
  // if (isLoading) {
  //   return (
  //     <div
  //       className="d-flex align-items-center justify-content-center"
  //       style={{ height: "100vh" }}
  //     >
  //       <Spinner animation="border" variant="primary" />
  //     </div>
  //   );
  // }

  return email && !user ? children : <Navigate to="/login" />;
};

export default PrivateAuth;
