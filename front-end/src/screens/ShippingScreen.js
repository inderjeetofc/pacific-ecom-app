import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../state/actions/userActions";

export default function ShippingScreen() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    navigate("/signin");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const shippingDetails = {
    fullName,
    address,
    city,
    postalCode,
    country,
  };
  console.log(shippingDetails);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(shippingDetails));
    navigate("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Shipping Address</h1>
          </div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="number"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Enter Postal Code"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              id="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter Country"
              required
            ></input>
          </div>
          <div>
            <button className="primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
