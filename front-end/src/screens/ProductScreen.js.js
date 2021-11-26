import React, { useState,useEffect } from "react";
import axios from 'axios'
// import data from "../data";
import { useParams, Link } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  const [products,setProducts]=useState([]);
  useEffect(() => {
    const fetchData = async function(){
      const {data}=await axios.get('/api/products')
      setProducts(data)
    }
    fetchData()
  }, [])
  let id = useParams().id;
  const Product = products.find((product) => product.id === id);
  if (!Product) {
    return <div>Product Does'nt Exist !</div>;
  }
  return (
    <div>
      <Link className="color-black" to="/">
        Back to Result
      </Link>
      <div className="row top space-around">
        <div className="col-2 row space-around">
          <img className="large" src={Product.image} alt={Product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{Product.name}</h1>
            </li>
            <li>
              <Rating
                rating={Product.rating}
                reviews={Product.reviews}
              ></Rating>
            </li>
            <li>Price :${Product.price}</li>
            <li>
              <p>Description:{Product.description}</p>
            </li>
          </ul>
        </div>
        <div className="row center col-1">
          <div className="card card_body product-card-color large">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${Product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Stock</div>
                  <div>
                    {Product.inStock > 0 ? (
                      <span className="success price">Available</span>
                    ) : (
                      <span className="failed price">Out of Stock</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
