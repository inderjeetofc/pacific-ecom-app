// import data from "../data";
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
import {productListReducer,productDetailsReducer} from "./reducers/productReducers";

import { applyMiddleware, createStore, compose } from "redux";
// import reducers from "./reducers/index";
const initialState = {};
// const reducer = (state, action) => {
//   return { products: data.products };
// };
const reducers = combineReducers({
  productList:productListReducer,
  productDetails:productDetailsReducer
})
// console.log("i am reducers",reducers)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;