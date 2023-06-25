import React from "react";
import { CartItemType } from "../App";
import { FaInfoCircle } from "react-icons/fa";
import { ProductItemWrapper } from "./ProductItem.styles";
type Props = {
  item: CartItemType;
  // handleAddToCart: (clickedItem: CartItemType) => void;
};
const ProductItem = ({ item }: Props) => {
  return (
    <ProductItemWrapper>
      <div className="container">
        <img src={item.image} alt="" />
        <div className="content">
          <h2>{item.title}</h2>
          <h3>£{item.price.toFixed(2)}</h3>
        </div>
        <FaInfoCircle />
        <button>Add to cart</button>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;
