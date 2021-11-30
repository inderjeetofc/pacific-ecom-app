import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {listProducts} from "../state/actions/productActions";
import Product from "../components/Product";


// import data from "../data";
// import axios from "axios";


export default function HomeScreen() {
  // const [products,setProducts]=useState([]);
  
  const dispatch = useDispatch(); // import dispatch
  const productsList = useSelector((state) => state.productList);
  let {products} = productsList;

  products = Array.from(products); // convert to array before passing to map 
  useEffect(() => {
    // const fetchData = async function(){
      //   const {data}=await axios.get('/api/products')
      //   setProducts(data)
      //   console.log("hola",data) 
      dispatch(listProducts());
    }, [dispatch]);
    return (
      <main className="row center">
      {products.map((product) => (
       <Product key={product.id} product={product}></Product>
      ))}
    </main>
  );
}
