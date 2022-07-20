import React from "react";
import "./css/profilePage.css";
import ControlPointTwoToneIcon from "@mui/icons-material/ControlPointTwoTone";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const onClickProfileHandler = () => {
    navigate(`/login`);
  };

  return (
    <div className="profile-page">
      <div className="top">
        <img src="./img/navbar.png" alt="logo" className="profile-img-logo" />
      </div>
      <div className="profile-item">
        <div className="profile-box-img" onClick={onClickProfileHandler}>
          <img
            src="./img/ProfilePicture1.png"
            alt="logo"
            className="profile-img"
          />
          <Typography variant="h6" className="profile-typo">
            Murat
          </Typography>
        </div>
        <div className="profile-box-img" onClick={onClickProfileHandler}>
          <img
            src="./img/ProfilePicture2.png"
            alt="logo"
            className="profile-img"
          />
          <Typography variant="h6" className="profile-typo">
            Umut
          </Typography>
        </div>
        <div className="profile-box-img" onClick={onClickProfileHandler}>
          <img
            src="./img/ProfilePicture3.png"
            alt="logo"
            className="profile-img"
          />
          <Typography variant="h6" className="profile-typo">
            Kemal
          </Typography>
        </div>
        <div className="profile-box-img" onClick={onClickProfileHandler}>
          <img
            src="./img/ProfilePicture4.png"
            alt="logo"
            className="profile-img"
          />
          <Typography variant="h6" className="profile-typo">
            Cocuk
          </Typography>
        </div>
        <div className="profile-box-img" onClick={onClickProfileHandler}>
          <ControlPointTwoToneIcon
            className="profile-icon"
            sx={{
              fontSize: "100px",
              color: "rgb(100, 100, 100)",
            }}
          />
          <Typography variant="h6" className="profile-typo">
            Other
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
