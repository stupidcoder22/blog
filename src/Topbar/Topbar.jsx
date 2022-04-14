import React from "react";
import "./Topbar.css";
const Topbar = () => {
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
          <li className="toplistitem">Home</li>
          <li className="toplistitem">About</li>
          <li className="toplistitem">Contact</li>
          <li className="toplistitem">Service</li>
          <li className="toplistitem">Logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="topsearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
