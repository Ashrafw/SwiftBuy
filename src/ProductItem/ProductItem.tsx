import React, { useState } from "react";
import { CartItemType } from "../App";
import { FaInfoCircle, FaStar, FaWindowClose } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { ProductItemWrapper } from "./ProductItem.styles";
type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
const ProductItem = ({ item, handleAddToCart }: Props) => {
  const [open, setOpen] = useState(false);
  const arr = new Array(Math.floor(item.rating.rate)).fill(1);
  return (
    <ProductItemWrapper>
      <div className="container">
        <img src={item.image} alt="" />
        <div className="content">
          <h2>{item.title}</h2>
          <h3>£{item.price.toFixed(2)}</h3>
        </div>
        <div className="info" onClick={() => setOpen((prev) => !prev)}>
          <p>more info</p>
          <FaInfoCircle />
        </div>
        {open && (
          <div
            className="inner-modal"
            onClick={(e) => {
              setOpen((prev) => !prev);
            }}
          >
            <div
              className="inner-inner"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="close" onClick={() => setOpen((prev) => !prev)}>
                <AiFillCloseCircle />
              </div>
              <img src={item.image} alt="" />
              <div className="content">
                <h2>{item.title}</h2>
                <div>
                  {arr.map((it) => (
                    <FaStar />
                  ))}
                </div>

                <h3 style={{ margin: "10px" }}>£{item.price.toFixed(2)}</h3>
                {/* <h4>description</h4> */}

                <p>{item.description}</p>
                <button onClick={() => handleAddToCart(item)} style={{ marginTop: "20px" }}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;
