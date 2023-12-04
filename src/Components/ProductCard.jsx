import React from "react";
import { useGlobalContext } from "../Context/AppContext";

const ProductCard = ({ id, name, description, quantity, price }) => {
  const { addToCart, cart, removeFromCart , decreaseItem} = useGlobalContext();
  const handleAddProduct = () => {
    const cartObj = { id, name, description, quantity, price };
    addToCart(cartObj);
  };
  const cartItemData = cart.find((item) => item.id === id);



  return (
    <div className=" border-2 border-black ">
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>{quantity}</h2>
      <p>{price}</p>
      <div className=" flex justify-between">
        {!cartItemData ? (
          <button className=" p-4 bg-green-500" onClick={handleAddProduct}>
            Add
          </button>
        ) : (
          <div className=" flex items-center space-x-4 ">
            <button className=" p-2 bg-green-500 text-white" onClick={handleAddProduct}>+</button>
            <p>{cartItemData.amount ? cartItemData.amount : 0}</p>
            <button className=" p-2 bg-green-500 text-white" onClick={()=> decreaseItem(id)}>-</button>
          </div>
        )}

        <button
          className=" p-4 bg-green-500"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
