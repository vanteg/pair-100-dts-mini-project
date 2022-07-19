import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// css
import "./css/loginLogout.css";

// import MUI
import { Typography, TextField, Button } from "@mui/material";

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

  const handleKeypress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      loginHandler();
    }
  };

  return (
    <>
      {/* <div
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
      </div> */}

      <div className="auth">
        <div className="auth-top">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/b6b5f9a2-85ac-4ca3-a25f-261e0a853f51/SG-en-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"
            className="auth-image"
          />
        </div>
        <div className="auth-container">
          <form onKeyPress={handleKeypress}>
            <Typography variant="h2">
              <strong>
                {" "}
                {loginOrRegister === "login" ? "Login" : "Register"}
              </strong>
            </Typography>{" "}
            <TextField
              type="email"
              variant="outlined"
              label="email or phone number"
              className="auth-tf"
              onChange={emailOnChangeHandler}
            />
            <TextField
              type="password"
              variant="outlined"
              label="password"
              className="auth-tf"
              onChange={passwordOnChangeHandler}
            />
            <Button
              variant="contained"
              onClick={buttonLoginOrRegisterOnClickHandler}
            >
              {loginOrRegister === "login" ? "Login" : "Register"}
            </Button>
            {loginOrRegister === "login" ? (
              <div>
                <b>
                  <Link to="/register">New to Netflix? Sign up now</Link>
                </b>
              </div>
            ) : (
              <b>
                <Link to="/login">Login</Link>
              </b>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginOrRegisterForm;
