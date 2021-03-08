import React, { Component } from "react";
import PreviewCollection from "../../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop.data.js";
export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherItemProps }) => (
          <PreviewCollection key={id} {...otherItemProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
