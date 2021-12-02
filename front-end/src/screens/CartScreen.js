import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { addToCart } from "../state/actions/cartActions";

export default function CartScreen(props) {
  const dispatch = useDispatch();
  let productId = useParams().id;
//   console.log(productId,typeof(productId))
//   productId= Number(productId)
//   console.log(productId,typeof(productId))
  let Qty = useLocation().search;
  Qty = Number(Qty.split("=")[1]);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, Qty));
    }
  }, [dispatch, productId, Qty]);
  return (
    <div>
      <h1>CART SCREEN</h1>
      <div className="row">
        <p>Product Id : {productId}</p>
        <p>qty : {Qty}</p>
      </div>
    </div>
  );
}
