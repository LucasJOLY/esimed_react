import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getMe } from "../store/slice";

const AuthGuard = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken?.id;

        if (!userId) {
          navigate("/login");
          return;
        }
        if (!user) {
          dispatch(getMe(userId))
            .then((response) => {
              if (!response?.payload) {
                navigate("/login");
              }
            })
            .catch(() => {
              navigate("/login");
            });
        } else {
          return <WrappedComponent {...props} />;
        }
      } catch (error) {
        navigate("/login");
      }
    }, [token, user]);
    return null;
  };
};

export default AuthGuard;
