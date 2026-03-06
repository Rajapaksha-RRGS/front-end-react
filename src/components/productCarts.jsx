import React from "react";
import "./productCarts.css";

export default function ProductCarts(props) {
  return (
    <div className="product-carts-container flex flex-col h-full p-3 m-4">
      <img className="product-image" src={props.picture} alt="Product 1" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3>price : ${props.price}</h3>
      <button className="add-to-cart-button test">Add to Cart</button>
    </div>
  );
}
