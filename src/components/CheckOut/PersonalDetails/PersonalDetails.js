import React from "react";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { firstName, lastName, email, phone } = userInfo.payload;
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
