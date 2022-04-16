import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
const Topbar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-whatsapp"></i>
      </div>
      <div className="top-center">
        <ul className="toplist">
          <li className="toplistitem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="toplistitem">
            <Link to="/" className="link">
              {user && "logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="toplistitem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className="topsearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
