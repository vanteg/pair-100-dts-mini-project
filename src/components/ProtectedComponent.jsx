// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../authentication/firebase";

// sloting children
const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  // cek user ada ga
  //   console.log(user.email);

  //   menggunakan useEffect untuk redirect ke halaman login jika user belum login
  console.log(user);
  useEffect(() => {
    if (!user) {
      //   navigate("/login");
      return;
    }
  }, [user, navigate]);
  //   menggunakan loading biar halaman ga berkedip
  if (isLoading) {
    return;
  } else {
    return children;
  }
};

export default ProtectedComponent;
