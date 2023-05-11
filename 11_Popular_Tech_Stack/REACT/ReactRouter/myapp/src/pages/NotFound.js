import React from "react";
import {Navigate, useNavigate} from "react-router-dom";

const NotFound = () => {
  // return <Navigate to={"/"} />;
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1000);
  return <h1>Not Found</h1>;
};

export default NotFound;
 