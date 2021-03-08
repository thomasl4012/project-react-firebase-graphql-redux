import React from "react";
import ItemCollection from "../item-collection/item-collection";
import "./preview-collection.component.scss";

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
