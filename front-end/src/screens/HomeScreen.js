import React, { useState,useEffect } from "react";
import Product from "../components/Product";
// import data from "../data";
import axios from 'axios'
export default function HomeScreen() {
  const [products,setProducts]=useState([]);
  useEffect(() => {
    const fetchData = async function(){
      const {data}=await axios.get('/api/products')
      setProducts(data)
      console.log("hola",data)
    }
    fetchData()
  }, [])
  return (
    <main className="row center">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </main>
  );
}
