import React from "react";
import { useGlobalContext } from "../Context/AppContext";
import { useNavigate } from "react-router";

const TopBar = () => {
  const { cart } = useGlobalContext();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout", { state: cart });
  };

  return (
    <div className=" h-20 bg-black text-white flex justify-center items-center ">
      <button disabled={cart.length === 0} onClick={handleClick}>Cart:{cart.length}</button>
    </div>
  );
};

export default TopBar;
