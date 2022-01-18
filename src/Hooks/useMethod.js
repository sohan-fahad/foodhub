import React, { useState } from "react";
import Swal from "sweetalert2";

const useMethod = () => {
  // Bootstrap Method
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [helpful, setHelpful] = useState(null);
  const [user, setUser] = useState(false);

  function showPassword(btnId, inputId) {
    let showInputPassword = document.getElementById(inputId);
    let showPasswordBtn = document.getElementById(btnId);
    if (showInputPassword.type === "password") {
      showInputPassword.type = "text";
      showPasswordBtn.innerText = "HIDE";
    } else {
      showInputPassword.type = "password";
      showPasswordBtn.innerText = "SHOW";
    }
  }

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
  return {
    showPassword,
    show,
    setShow,
    handleClose,
    handleShow,
    helpful,
    setHelpful,
    cancelAlert,
    setUser,
    user,
  };
};

export default useMethod;
