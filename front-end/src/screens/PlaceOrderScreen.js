import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PlaceOrderScreen() {
  const cart = useSelector((state) => state.cart);
  const { cartItem, shippingAddress, paymentMethod } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  cartItem.itemTotal = cartItem.reduce(
    (a, c) => a + c.cartData.price * c.qty,
    0
  );
  cartItem.shippingCharges = cartItem.itemTotal > 200 ? 0 : 50;
  cartItem.tax = Number((cartItem.itemTotal * 0.1).toFixed(2));
  cartItem.orderTotal = (
    cartItem.itemTotal +
    cartItem.shippingCharges +
    cartItem.tax
  ).toFixed(2);
  const placeOrderHandler=()=>{
      //code
  }
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2 m-x-small m-y-small">
          <ul>
            <li>
              <div className="card_body product-card-color  ">
                <h2>Shipping</h2>
                <p>
                  <strong>Name: </strong>
                  {shippingAddress.fullName}
                  <br />
                  <strong>Address: </strong>
                  {shippingAddress.address},{shippingAddress.city},
                  {shippingAddress.postalCode},{shippingAddress.country}
                  <br />
                </p>
              </div>
            </li>
            <li>
              <div className="card_body product-card-color  ">
                <h2>Payment</h2>
                <p>
                  <strong>Method: </strong>
                  {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card_body product-card-color  ">
                <h2>Order items:</h2>
                <ul>
                  {cartItem.map((pdt) => (
                    <li key={pdt.cartData._id}>
                      <div className="row">
                        <div>
                          <img
                            src={pdt.cartData.image}
                            className="small"
                            alt={pdt.cartData.name}
                          ></img>
                        </div>
                        <div className="min-30">
                          <p>{pdt.cartData.name}</p>
                        </div>
                        <div>
                          <p>
                            {pdt.qty} x {pdt.cartData.price} = $
                            {(pdt.qty * pdt.cartData.price).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1 m-x-small m-y-small">
        {cartItem.shippingCharges !== 0 && (
                <span className="m-y-small" style={{color:"red",fontSize:"1.1rem"}}>
                  Shop for ${(200 - cartItem.itemTotal).toFixed(2)} more to save on shipping
                  charges !{" "}
                  <Link
                    to="/"
                    className="color-black"
                    style={{
                      display: "inline-block",
                    }}
                  >
                     Go Shopping 
                  </Link>
                </span>
              )}
          <ul>
            <li>
              
              <div className="card_body product-card-color border">
                <h1 className="m-y-large">Order Summary</h1>
                <div>
                  <div className="row m-y-xsmall">
                    <h3>Items</h3>
                    <p>
                      $
                      {cartItem.reduce(
                        (a, c) => a + c.cartData.price * c.qty,
                        0
                      )}
                    </p>
                  </div>
                  <div className="row m-y-xsmall">
                    <h3>
                      Shipping charges{" "}
                      <span style={{ fontSize: "0.9rem", color: "brown" }}>
                        (for billing less than $200)
                      </span>
                    </h3>
                    <p>+ ${cartItem.shippingCharges}</p>
                  </div>
                  <div className="row m-y-xsmall">
                    <h3>
                      Tax{" "}
                      <span style={{ fontSize: "0.9rem", color: "brown" }}>
                        (12% on item total)
                      </span>
                    </h3>
                    <p>+ ${cartItem.tax}</p>
                  </div>
                  <hr />
                  <div className="row m-y-small">
                    <h2>Order Total</h2>
                    <h2>${cartItem.orderTotal}</h2>
                  </div>
                </div>
                <div>
                  <button className="primary block m-y-xsmall" onSubmit={placeOrderHandler}>
                    Place Order
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
