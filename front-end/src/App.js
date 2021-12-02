import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import { useSelector } from "react-redux";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen.js";
function App() {
  const cart  = useSelector(state => state.cart)
  let {cartItem} = cart;
  return (
      <div className="grid_container">
        <header>
          <div className="row navbar">
            <div className="pacific_logo">
              <Link to="/">PACIFIC</Link>
            </div>
            <div className="nav_right_div">
              <Link to="/signin">Sign In</Link>
              <Link to="/cart">Cart
              {cartItem.length>0&&(<span className="badge">{cartItem.length}</span>)}</Link>
            </div>
          </div>
        </header>
        <main className="row center">
          <Routes>
            <Route path="/cart/:id" element={<CartScreen/>}/>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/product/:id" element={<ProductScreen/>}/>
          </Routes>
        </main>
        <footer className="row center">
          <span>copyright &copy; All rights reserved !</span>
        </footer>
      </div>
  );
}

export default App;
