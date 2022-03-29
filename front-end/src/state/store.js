// import data from "../data";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import {
    productListReducer,
    productDetailsReducer,
} from "./reducers/productReducers";

import { applyMiddleware, createStore, compose } from "redux";
import { cartReducer } from "./reducers/cartReducers";
import {
    userRegisterReducer,
    userSigninReducer,
} from "./reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer } from "./reducers/OrderReducers";
// import reducers from "./reducers/index";
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : null,
    },
    cart: {
        cartItem: localStorage.getItem("cartItem")
            ? JSON.parse(localStorage.getItem("cartItem"))
            : [],
        shippingAddress: localStorage.getItem("shippingAddress")
            ? JSON.parse(localStorage.getItem("shippingAddress"))
            : {},
        paymentMethod: 'payPal'
    }
};
// const reducer = (state, action) => {
//   return { products: data.products };
// };
const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer
});
// console.log("i am reducers",reducers)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;
