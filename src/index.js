import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ProtectedComponent from "./components/ProtectedComponent";
import MovieDetail from "./components/MovieDetail";
import ProfilePage from "./components/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="login"
            element={
              <ProtectedComponent login={false}>
                <LoginPage />
              </ProtectedComponent>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedComponent login={false}>
                <RegisterPage />
              </ProtectedComponent>
            }
          />
          <Route
            path="movie/:id"
            element={
              <ProtectedComponent>
                <MovieDetail />
              </ProtectedComponent>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedComponent login={false}>
                <ProfilePage />
              </ProtectedComponent>
            }
          />
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center" }}>
                <h1>404 - There is Nothing Here</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
