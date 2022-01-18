import React, { useState } from "react";

const useServer = () => {
  let server = "https://raw.githubusercontent.com/sohan-fahad";
  return {
    server,
  };
};

export default useServer;
