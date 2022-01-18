import React from "react";
import "./UserProfile.css";
import bkashImg from "../../images/bKashIcon.png";
import useMethod from "../../Hooks/useMethod";
import useAuthentication from "../../Hooks/useAuthentication";

const UserProfile = () => {
  const { showPassword } = useMethod();
  const { userInfo } = useAuthentication();
  return (
    <div className="UserProfile" id="profile">
      <div className="user_profile_wrapper">
        <div className="user_profile_info">
          <h3>MY PROFILE</h3>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={userInfo.email}
            />
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              defaultValue={userInfo.firstName}
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              defaultValue={userInfo.lastName}
            />
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              defaultValue={userInfo.phone}
            />
            <input type="submit" value="SAVE" />
          </form>
        </div>
        <div className="user_profile_info user_profile_password">
          <h3>PASSWORD</h3>
          <form>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="user_password"
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
              name="c_password"
              placeholder="Confirm Password"
              id="user_confirm_password"
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
