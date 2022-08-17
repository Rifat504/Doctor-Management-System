import React from "react";
import "./TopHeader.css";
import ServiceCart from "./../ServiceCart/ServiceCart";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="main-heading">
        <h1 className="header">
          NOW, YOU CAN BOOK YOUR <br />
          APPOINTMENT ONLINE!
        </h1>
        <h5 className="mini-header">
          HOSPITAL APPOINTMENT SYSTEM (UI)
        </h5>
        <Link to="/category">
          <button className="btn btn-dark mt-4">Get a Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
