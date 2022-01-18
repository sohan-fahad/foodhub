import React, { useState } from "react";

const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState(true);
  return {
    userLocation,
    setUserLocation,
  };
};

export default useUserLocation;
