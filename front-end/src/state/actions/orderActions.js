import axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payLoad: order });
  try {
    const { userSignin } = getState();
    const { userInfo } = userSignin;
    const { data } = await axios.post("/api/orders", order, {
      headers: { authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payLoad: data.order});
    dispatch({type:CART_EMPTY})
    localStorage.removeItem('cartItem')
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payLoad:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};