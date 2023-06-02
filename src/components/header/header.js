import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { CartBlock } from "../cart-block";
export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header_store-title">
          Game Title
        </Link>
      </div>
      <div className="wrapper header_cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
