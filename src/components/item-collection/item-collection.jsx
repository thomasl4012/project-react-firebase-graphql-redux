import "./item-collection.scss";

import React from "react";

const ItemCollection = ({ id, name, price, imageUrl, currency }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          {price}
          {currency}
        </span>
      </div>
    </div>
  );
};

export default ItemCollection;
