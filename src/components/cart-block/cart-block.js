import React from "react";
import { BsCartPlus } from "react-icons/bs";
import "./cart-block.css";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BsCartPlus size={25} className="cart-block_icon" />
      <span className="cart-block_total-price">1000kc</span>
    </div>
  );
};
