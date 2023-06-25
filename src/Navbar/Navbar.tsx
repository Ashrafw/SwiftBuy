import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="logo">SwiftBuy</div>
      <div className="right">
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
