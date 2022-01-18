import React from "react";

const useApi = () => {
  const foodHubAPI = "https://foodhubapp-api.herokuapp.com/api/v1";
  return { foodHubAPI };
};

export default useApi;
