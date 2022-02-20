import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [!user])

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
          defaultValue={user?.user?.firstName}
        />
        <input
          type="text"
          name=""
          placeholder="First name"
          defaultValue={user?.user?.lastName}
        />
        <input
          type="text"
          name=""
          placeholder="Last name"
          defaultValue={user?.user?.email}
        />
        <input
          type="number"
          name=""
          placeholder="Mobile number"
          defaultValue={user?.user?.phone}
        />
        <input type="submit" value="SAVE" />
      </form>
    </div>
  );
};

export default PersonalDetails;
