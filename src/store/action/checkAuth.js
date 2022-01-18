const checkAuth = (userInfo) => {
  return {
    type: "AUTH_CHECK",
    payload: userInfo,
  };
};

export default checkAuth;
