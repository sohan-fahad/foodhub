import React from "react";
import { useSelector } from "react-redux";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  const { user } = useSelector((state) => state.authCheckReducer)
  console.log(user);
  const { firstName, lastName, email, phone } = user;
  return (
    <div className="PersonalDetails">
      <div className="PersonalDetails_title">
        <span>2</span>
        <h3 className="ms-3 mb-0">Personal details</h3>
      </div>
      <form>
        <input
          type="text"
          name=""
          placeholder="Email"
          defaultValue={firstName}
        />
        <input
          type="text"
          name=""
          placeholder="First name"
          defaultValue={lastName}
        />
        <input
          type="text"
          name=""
          placeholder="Last name"
          defaultValue={email}
        />
        <input
          type="number"
          name=""
          placeholder="Mobile number"
          defaultValue={phone}
        />
        <input type="submit" value="SAVE" />
      </form>
    </div>
  );
};

export default PersonalDetails;
