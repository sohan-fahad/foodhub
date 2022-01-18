import React from "react";
import WithLogin from "../WithLogin/WithLogin";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const google_icon =
    "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)";
  const facebook_icon =
    "url(https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png)";

  return (
    <div className="Login" id="login">
      <div className="login_form_wrapper">
        <h3>Welcome!</h3>
        <p>Sign up or log in to continue</p>
        <div className="login_btn_container">
          <WithLogin
            icon={google_icon}
            btnName="Google"
            className="mb-3"
          ></WithLogin>
          <WithLogin icon={facebook_icon} btnName="Facebook"></WithLogin>
        </div>
        <h5 className="text-center p-0 my-3">OR</h5>
        <Nav.Link as={Link} to="/login/email" className="email_login_btn">
          CONTINUE WITH EMAIL
        </Nav.Link>
        <p className="login_term_condition">
          By signing up, you agree to our <span>Terms and Conditions</span> and
          <span> Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
