import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../state/actions/productActions";
// import axios from 'axios'
// import data from "../data";
import { useParams, Link } from "react-router-dom";
import Rating from "../components/Rating";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

export default function ProductScreen(props) {
  // const [products,setProducts]=useState([]);
  // useEffect(() => {
  //   const fetchData = async function(){
  //     const {data}=await axios.get('/api/products')
  //     setProducts(data)
  //   }
  //   fetchData()
  // }, [])
  const dispatch = useDispatch(); // import dispatch
  const productDetails = useSelector((state) => state.productDetails);
  let { Product, loading, error } = productDetails;
  let id = useParams().id; //get id from URL
  //hook for qty
  const [Qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

  // const Product = products.find((product) => product.id === id);

  //function to handle on click on add to cart
  // const addToCartHandler = () => {
  //   props.history.push(`/cart/:${id}/?Qty=${Qty}`);
  // };
  if (!Product) {
    return (
      <>{error && <MessageBox variant={`message-box`}>{error}</MessageBox>}</>
    );
  }
  if (loading) {
    return <> {loading && <LoadingBox>Loading...</LoadingBox>}</>;
  }
  return (
    <div>
      <Link
        className="color-black"
        style={{
          display: "inline-block",
          marginBottom: "1rem",
          marginLeft: "1rem",
          marginTop: "0.5rem",
        }}
        to="/"
      >
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
            <li>
              Price :<span className="price">${Product.price}</span>
            </li>
            <li>
              <p>
                Description:
                <span style={{ fontSize: "1.3rem", color: "#203040" }}>
                  {Product.description}
                </span>
              </p>
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
              {Product.inStock > 0 && (
                <>
                  <li>
                    <div className="row">
                      <div>Qty</div>
                      <div>
                        <select
                          value={Qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(Product.inStock).keys()].map((e) => {
                            return (
                              <option key={e + 1} value={e + 1}>
                                {e + 1}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to={`/cart/${id}?qty=${Qty}`}>
                      <button className="primary block">Add to Cart</button>
                    </Link>
                    {/* <button
                      onClick={addToCartHandler}
                      className="primary block"
                    >
                      Add to Cart
                    </button> */}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
