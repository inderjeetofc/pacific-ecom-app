import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payLoad;
      const existItem = state.cartItem.find(
        (pdt) => pdt.cartData.id === item.cartData.id
      );
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map(
            (pdt) => pdt.cartData.id === existItem.cartData.id
            ? item
            : pdt,
          )};
      } else return { ...state, cartItem: [...state.cartItem, item] };
    default:
      return state;
  }
};
