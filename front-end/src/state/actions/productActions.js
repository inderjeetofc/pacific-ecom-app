import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    payLoad:"loading"
  });
  try {
    const { data } = await axios.get("/api/products");
    console.log("i am data :", data);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payLoad: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payLoad: error.message,
    });
  }
};

// export default listProducts;
