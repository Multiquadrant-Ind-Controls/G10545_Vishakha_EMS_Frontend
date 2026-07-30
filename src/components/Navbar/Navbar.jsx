import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import MQ_Vishakha_Logo from "./../../images/MQ_vishakha_logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="Navbar">
      <div className="left_nav">
        <div className="logo">
          <img
            src={MQ_Vishakha_Logo}
            alt="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="link">
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "active_nav_link" : "nav_link"
                }
              >
                SLD
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/report"
                className={({ isActive }) =>
                  isActive ? "active_nav_link" : "nav_link"
                }
              >
                Report
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/alarm"
                className={({ isActive }) =>
                  isActive ? "active_nav_link" : "nav_link"
                }
              >
                Alarm
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="right_nav">
        <button className="btn" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Navbar;