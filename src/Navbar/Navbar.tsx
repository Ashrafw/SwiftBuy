import React, { Dispatch, SetStateAction } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavWrapper } from "./Navbar.styles";
import { CartItemType } from "../App";

type NavProps = {
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItemType[];
};

const Navbar = ({ cartItems, setIsCartOpen }: NavProps) => {
  return (
    <NavWrapper>
      <div className="container">
        <div className="logo">SwiftBuy</div>
        <div className="right" onClick={() => setIsCartOpen((prev) => !prev)}>
          <FaShoppingCart />
          <div className="amount">{cartItems.reduce((acc, item) => acc + item.amount, 0)}</div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
