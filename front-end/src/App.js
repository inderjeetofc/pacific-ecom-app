import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen.js";
import SigninScreen from "./screens/SigninScreen";
import ShippingScreen from "./screens/ShippingScreen";
import { userSignoutAction } from "./state/actions/userActions";
function App() {
  const dispatch = useDispatch()
  const userSignin = useSelector((state) => state.userSignin);
  let { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  let { cartItem } = cart;
  const signOutHandler = () => {
  dispatch(userSignoutAction())
  };
  return (
    <div className="grid_container">
      <header>
        <div className="row navbar">
          <div className="pacific_logo">
            <Link to="/">PACIFIC</Link>
          </div>
          <div className="nav_right_div">
            <Link to="/cart">
              Cart
              {cartItem.length > 0 && (
                <span className="badge">{cartItem.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name}{"  "}
                  <i class="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signOutHandler}>
                    Sign out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </div>
      </header>
      <main className="">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id" element={<CartScreen />}/>
          <Route path='/cart' element={<CartScreen />}/>
        </Routes>
      </main>
      <footer className="row center">
        <span>copyright &copy; All rights reserved !</span>
      </footer>
    </div>
  );
}

export default App;
