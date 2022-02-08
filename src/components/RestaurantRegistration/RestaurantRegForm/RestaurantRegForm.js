import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useApi from "../../../Hooks/useApi";
import "./RestaurantRegForm.css";
import registerRestaurant from "../../../store/action/registerRestaurant";
import Swal from "sweetalert2";

const RestaurantRegForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const { foodHubAPI } = useApi();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    fetch(`${foodHubAPI}/user/register-restaurant`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          dispatch(registerRestaurant(data.payload));
          Swal.fire(
            'Successful!',
            'Your successfully submitted.',
            'success'
          )
          reset()
        } else {
          alert("error");
        }
      });
  };

  return (
    <div className="RestaurantRegForm">
      <div className="container">
        <h1>Join as a Partner Restaurant</h1>
        <p>
          The info you provide is safe and it’ll help us get you set up faster.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="RestaurantRegForm_wrapper">
            <div className="RestaurantRegForm_details">
              <h3>Your Restaurant</h3>
            </div>
            <div className="RestaurantRegForm_details_input">
              <label>
                Restaurant Name <span className="brand_color">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your restaurant name"
                {...register("name")}
                required
              />
              <label>
                Restaurant Address <span className="brand_color">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your restaurant address"
                {...register("address")}
                required
              />
              <label>What is the average cost of a meal for one person?</label>
              <select name="" id="" {...register("average_cost")}>
                <option value="" disabled selected>average</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </select>
            </div>
          </div>
          <div className="RestaurantRegForm_wrapper mt-5">
            <div className="RestaurantRegForm_details">
              <h3>Your Restaurant</h3>
            </div>
            <div className="RestaurantRegForm_details_input">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <label>
                    Your first name <span className="brand_color">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName")}
                    required
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <label>
                    Your last name <span className="brand_color">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                    required
                  />
                </div>
                <div className="col-12">
                  <label>
                    Email Address <span className="brand_color">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email name"
                    {...register("email")}
                    required
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <label>
                    Your Role <span className="brand_color">*</span>
                  </label>
                  <select name="" id="" {...register("role")} required>
                    <option value="" disabled selected>Role</option>
                    <option value="1">Manager</option>
                    <option value="2">Supervisor</option>
                  </select>
                </div>

                <div className="col-lg-6 col-12">
                  <label>
                    Mobile Number <span className="brand_color">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="01XXXXXXXXX"
                    {...register("phone")}
                    required
                  />
                </div>
              </div>
              <button type="submit">Register Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegForm;
