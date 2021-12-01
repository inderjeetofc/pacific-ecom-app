import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS
} from "../constants/productConstants";

export const productListReducer = (
  state = { loading: true, products: [], actions: null },
  action
) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return {
          loading: true,
          products: action.payLoad,
          actions: action.type,
        };
      case PRODUCT_LIST_SUCCESS: {
        return {
          loading: false,
          products: action.payLoad,
          actions: action.type,
        };
      }
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payLoad, actions: action.type };
      default:
        return state;
    }
};

//product screen reducer
export const productDetailsReducer = (
  state = { loading: true, Product: [], actions: null },
  action
) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return {
          loading: true,
          Product: action.payLoad,
          actions: action.type,
        };
      case PRODUCT_DETAILS_SUCCESS: {
        return {
          loading: false,
          Product: action.payLoad,
          actions: action.type,
        };
      }
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payLoad, actions: action.type };
      default:
        return state;
    }
};

// export default productListReducer;
