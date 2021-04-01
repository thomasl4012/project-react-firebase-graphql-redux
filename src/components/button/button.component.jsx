import React from "react";
import "./button.style.scss";
const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
