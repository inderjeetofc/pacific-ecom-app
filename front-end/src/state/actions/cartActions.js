import axios from "axios";
import { CART_ADD_ITEM, CART_PAYMENT_METHOD, CART_REMOVE_ITEM, CART_SHIPPING_DETAILS } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const data = await axios.get(`/api/products/${productId}`);
  const cartData = data.data;
  dispatch({
    type: CART_ADD_ITEM,
    payLoad: { cartData, qty },
  });
  localStorage.setItem("cartItem",JSON.stringify(getState().cart.cartItem));
};
export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({
    type:CART_REMOVE_ITEM,
    payLoad:productId
  });
  localStorage.setItem("cartItem",JSON.stringify(getState().cart.cartItem)); 
};
export const saveShippingAddress = (shippingDetails) => async (dispatch) => {
  dispatch({ type: CART_SHIPPING_DETAILS, payLoad: shippingDetails });
  localStorage.setItem("shippingAddress", JSON.stringify(shippingDetails));
};
export const savePaymentMethod = (paymentMethod) => async (dispatch) => {
  dispatch({ type: CART_PAYMENT_METHOD, payLoad: paymentMethod });
};
