import axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SHIPPING_DETAILS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userContants";

export const userSigninAction = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payLoad: { email, password },
  });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payLoad: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payLoad:
        error.response.data.message && error.response
          ? error.response.data.message
          : error.message,
    });
  }
};
export const userRegisterAction =
  (name, email, password, confirmPassword) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payLoad: { name, email, password },
    });
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payLoad: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payLoad: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payLoad:
          error.response.data.message && error.response
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const userSignoutAction = () => async (dispatch) => {
  localStorage.removeItem("cartItem");
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
};

export const saveShippingAddress = (shippingDetails) => async (dispatch) => {
  dispatch({ type: USER_SHIPPING_DETAILS, payLoad: shippingDetails });
  localStorage.setItem("shippingAddress", JSON.stringify(shippingDetails));
};
