import Button from "../button/button.component";

import "./cart-dropdown.style.scss";

import React from "react";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
};
