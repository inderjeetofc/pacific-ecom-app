import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => 
  async (dispatch,getState) => {
    const  data  = await axios.get(`/api/products/${productId}`);
    const cartData = data.data;
      dispatch({
          type:CART_ADD_ITEM,
          payLoad:{cartData,qty}
      })
      localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItem))
  };
