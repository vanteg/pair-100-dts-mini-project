import React from "react";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            position: "absolute",
            left: "0%",
            right: "28.89%",
            top: "0%",
            bottom: "0%",
          }}
        >
          <img src="./img/ProfilePicture.png" alt="" />
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "1024px",
            left: "291px",
            top: "0px",
            background:
              "linear-gradient(270.09deg, #000000 59.87%, rgba(217, 217, 217, 0) 99.92%)",
          }}
        ></div>
        <input
          type="text"
          placeholder="Email"
          style={{
            boxSizing: "border-box",
            position: "absolute",
            width: "522px",
            height: "100px",
            left: "797px",
            top: "325px",
            background: "rgba(234, 234, 234, 0.07)",
            border: "1px solid #FFFFFF",
            borderRadius: "4px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            boxSizing: "border-box",
            position: "absolute",
            width: "522px",
            height: "100px",
            left: "797px",
            top: "447px",
            background: "rgba(234, 234, 234, 0.07)",
            border: "1px solid #FFFFFF",
            borderRadius: "4px",
          }}
        />
        <button
          style={{
            position: "absolute",
            width: "522px",
            height: "100px",
            left: "797px",
            top: "598px",
            background: "#E50913",
            borderRadius: "4px",
          }}
        >
          {loginOrRegister === "login" ? (
            <a
              style={{
                fontFamily: "'Inter'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "31px",
                letterSpacing: "0.16em",
                color: "#FFFFFF",
              }}
            >
              LOGIN
            </a>
          ) : (
            <a
              style={{
                fontFamily: "'Inter'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "31px",
                letterSpacing: "0.16em",
                color: "#FFFFFF",
              }}
            >
              REGISTER
            </a>
          )}
        </button>
      </div>
    </>
  );
};

export default LoginOrRegisterForm;
