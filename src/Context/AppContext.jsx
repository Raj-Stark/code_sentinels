import { createContext, useContext, useReducer } from "react";
import { AppReducer } from "../Reducer/AppReducer";
import { productsData } from "../data";

const ProductContext = createContext();

const Appstate = {
  allProducts: [...productsData],
  cart: [],
};

export const AllProducts = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, Appstate);

  const addToCart = (cartData) => {
    dispatch({ type: "ADD_TO_CART", payload: cartData });
  };

  const removeFromCart = (itemId)=>{
    dispatch({ type: "REMOVE", payload: itemId});
  }
  const decreaseItem = (itemId)=>{
    dispatch({ type: "DECREMENT", payload: itemId});
  }

  return (
    <ProductContext.Provider value={{ ...state, addToCart , removeFromCart , decreaseItem}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductContext);
};
