import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_PAYMENT_METHOD,
  CART_REMOVE_ITEM,
  CART_SHIPPING_DETAILS,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payLoad;
      const existItem = state.cartItem.find(
        (pdt) => pdt.cartData._id === item.cartData._id
      );
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((pdt) =>
            pdt.cartData._id === existItem.cartData._id ? item : pdt
          ),
        };
      } else return { ...state, cartItem: [...state.cartItem, item] };
    case CART_REMOVE_ITEM:
      // console.log(state.cartItem.filter(e=>e.cartData.id!==action.payLoad))
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (pdt) => pdt.cartData._id !== action.payLoad
        ),
      };
    case CART_SHIPPING_DETAILS:
      return { ...state, shippingAddress: action.payLoad };
    case CART_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payLoad };
    case CART_EMPTY:
      return { ...state, cartItem:[] };
    default:
      return state;
  }
};
