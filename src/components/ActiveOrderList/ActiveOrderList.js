import React from "react";
import Swal from "sweetalert2";
import "./ActiveOrderList.css";

const ActiveOrderList = () => {
  const cancelAlert = () => {
    Swal.fire({
      title: "Why you want to cancel the order?",
      input: "textarea",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "SUBMIT",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  return (
    <div className="ActiveOrderList">
      <div className="active_order_list_info">
        <h3>Restaurant Name</h3>
        <p>
          Deliver by <span className="fw-bold">Food Hub</span>
        </p>
        <p>Oct 7, 2021</p>
        <p>2x Platter One</p>
      </div>
      <div className="active_order_list_btn">
        <p>BDT 266254</p>
        <p className="fw-bold brand_color">PENDING</p>
        <button onClick={cancelAlert}>CANCEL</button>
      </div>
    </div>
  );
};

export default ActiveOrderList;
