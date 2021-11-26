import React from "react";
import { Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen.js";
function App() {
  return (
      <div className="grid_container">
        <header>
          <div className="row navbar">
            <div className="pacific_logo">
              <a href="/">PACIFIC</a>
            </div>
            <div className="nav_right_div">
              <a href="/signin">Sign In</a>
              <a href="/cart">Cart</a>
            </div>
          </div>
        </header>
        <main className="row center">
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/product/:id" element={<ProductScreen/>}/>
          </Routes>
        </main>
        <footer className="row">
          <span> copyright&copy All rights reserved !</span>
        </footer>
      </div>
  );
}

export default App;
