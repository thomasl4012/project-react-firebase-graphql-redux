import React from "react";
import ItemCollection from "../item-collection/item-collection.component";
import "./preview-collection.style.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemsProps }) => (
          <ItemCollection key={id} {...otherItemsProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
