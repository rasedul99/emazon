import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt={name} />

      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button className="add-to-cart" onClick={ ()=>{handleAddToCart(product.id)} }>
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;
