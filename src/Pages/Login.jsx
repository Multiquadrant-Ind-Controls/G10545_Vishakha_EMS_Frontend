import React, { useState } from "react";
import "./LoginPage.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Admin" && password === "Admin@1234") {
      navigate("/home");
    } else {
      alert("Invalid Username or Password");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-page">
      {/* Top Logos */}
      <div className="top-section">
        <div className="logo-container">
          <img src="/vishakha.jpg" alt="Logo 1" className="logo" />

          <div className="divider"></div>

          <img src="/multiquadrant.png" alt="Logo 2" className="logo" />
        </div>

        {/* Title */}
        <div className="title-section">
          <div className="line"></div>

          <h1>ENERGY MANAGEMENT SYSTEM</h1>

          <div className="line"></div>
        </div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>

        {/* Username */}
        <div className="input-group">
          <label>Username</label>

          <div className="input-box">
            <FaUser className="icon" />

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password</label>

          <div className="input-box">
            <FaLock className="icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Login Button */}
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;