import React from "react";
import { redirect } from "react-router";
const AuthGuard = (WrappedComponent) => {
  return (props) => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default AuthGuard;
