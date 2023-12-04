export const AppReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { cart } = state;
    const cartData = action.payload;
    const check = cart.find((item) => item.id === cartData.id);

    if (!check) {
      const newObj = {
        amount: 0,
        ...cartData,
      };

      return { ...state, cart: [...state.cart, newObj] };
    }
    const dummy = cart.map((cartItem) => {
      if (cartItem.id === cartData.id) {
        if (cartItem.amount < cartItem.quantity) {
          cartItem.amount++;
        }
      }

      return cartItem;
    });

    return { ...state, cart: dummy };
  }

  if (action.type === "REMOVE") {
    const { cart } = state;
    const newerCart = cart.filter((item) => item.id !== action.payload);

    return { ...state, cart: newerCart };
  }

  if (action.type === "DECREMENT") {

    console.log("decrement");
    const { cart } = state;

    const dummy = cart.map((cartItem) => {

      console.log(action.payload);
      if (cartItem.id === action.payload) {
        console.log("this logs")
        if (cartItem.amount <= 0) {
          cartItem.amount = -1;
        }
        cartItem.amount--;
        return cartItem;
      }

      return cartItem;
    });

   const final =  dummy.filter((item)=> item.amount >= 0);

    return { ...state, cart: final };
  }

  return state;
};
