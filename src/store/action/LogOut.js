const logOut = (userInfo) => {
  return {
    type: "LOG_OUT",
    payload: userInfo,
  };
};

export default logOut;
