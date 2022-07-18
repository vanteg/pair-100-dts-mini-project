import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  // menggunakan authstate dari firebase untuk mendapatkan user loading dan error
  const [user, isLoading] = useAuthState(auth);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const emailOnChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      email: event.target.value,
    });
  };

  const passwordOnChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credentials.email, credentials.password);
  };
  const registerHandler = () => {
    registerWithEmailAndPassword(credentials.email, credentials.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  // redirect jika berhasil login
  useEffect(() => {
    // cek jika user sudah login
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  // jika loading return kosong (tidak ada yang di return)
  if (isLoading) {
    return;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row ",
          //   maxWidth: "960px",
        }}
      >
        <div>ini buat image nanti</div>
        <div style={{ display: "flex", flexDirection: "column " }}>
          <div style={{ display: "flex", flexDirection: "column " }}>
            <input
              label="Email"
              placeholder="email"
              value={credentials.email}
              onChange={emailOnChangeHandler}
            />
            <input
              label="Password"
              placeholder="password"
              value={credentials.password}
              onChange={passwordOnChangeHandler}
            />
            <button onClick={buttonLoginOrRegisterOnClickHandler}>
              {loginOrRegister === "login" ? "Login" : "Register Account"}
            </button>
          </div>
          {loginOrRegister === "login" ? (
            <div>
              <Link to="/register">New to Netflix? Sign up now</Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginOrRegisterForm;
