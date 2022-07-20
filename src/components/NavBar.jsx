import React from "react";
import "./css/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { logout } from "../authentication/firebase";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const NavBar = (propsData) => {
  // capture posisi layar saat di scroll
  const [show, handleShow] = React.useState(false);
  const [user] = useAuthState(auth);
  const checkScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  const navigate = useNavigate();
  // onClick home
  const handleHome = () => {
    navigate("/");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      checkScroll();
    });
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [handleShow]);

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="container">
          <div className="left" onClick={handleHome}>
            <img
              src={process.env.PUBLIC_URL + "/img/navbar.png"}
              alt="logo"
              className="nav-img-logo"
            />
            <span className="span-nav-menu">Homepage</span>
            <span className="span-nav-menu">Series</span>
            <span className="span-nav-menu">Movies</span>
            <span className="span-nav-menu">New and Popular</span>
            <span className="span-nav-menu">My List</span>
          </div>
          {user ? (
            <div className="right">
              <SearchIcon className="nav-icon" />
              <span>profile</span>
              <NotificationsIcon className="nav-icon" />
              <img
                src={process.env.PUBLIC_URL + "/img/ProfilePicture1.png"}
                alt="logo"
                className="nav-img-profile"
              />
              <div className="drop-profile">
                <ArrowDropDownIcon />
                <div className="nav-option">
                  <span className="nav-logout-text" onClick={logout}>
                    Logout
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="right">
              <Link to="profile" className="nav-login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
