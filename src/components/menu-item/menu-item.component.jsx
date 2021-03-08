import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, ImageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${ImageUrl})` }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
