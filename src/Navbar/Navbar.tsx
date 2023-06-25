import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavWrapper } from "./Navbar.styles";
const Navbar = () => {
  return (
    <NavWrapper>
      <div className="container">
        <div className="logo">SwiftBuy</div>
        <div className="right">
          <FaShoppingCart />
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
