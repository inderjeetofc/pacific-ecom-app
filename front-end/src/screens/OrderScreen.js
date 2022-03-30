import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { detailsOrder } from "../state/actions/orderActions";

export default function OrderScreen() {
    const dispatch = useDispatch();
    let orderId = useParams().id; //get id from URL

    let orderDetails = useSelector(state => state.orderDetails)
    let { loading, error, order } = orderDetails
    useEffect(() => {
        dispatch(detailsOrder(orderId))
    }, [dispatch, orderId]);
    return loading ? (<LoadingBox></LoadingBox>)
        : error ? (<MessageBox variant="failed">{error}</MessageBox>)
            : (
                <div>
                    <h1>Order ID = {orderId}</h1>
                    <div className="row top">
                        {order.orderItems.length === 0 ? (
                            <MessageBox variant={`message-box m-x-small`}>
                                Cart is Empty ! <Link to="/">Go Shopping</Link>
                            </MessageBox>
                        ) : (
                            <>
                                <div className="col-2 m-x-small m-y-small">
                                    <ul>
                                        <li>
                                            <div className="card_body product-card-color  ">
                                                <h2>Shipping</h2>
                                                <p>
                                                    <strong>Name: </strong>
                                                    {order.shippingAddress.fullName}
                                                    <br />
                                                    <strong>Address: </strong>
                                                    {order.shippingAddress.address},{order.shippingAddress.city},
                                                    {order.shippingAddress.postalCode},{order.shippingAddress.country}
                                                    <br />
                                                </p>
                                                {order.deliveryDetails.isDelivered ? <MessageBox variant="message-box-success success">
                                                    Delivered !
                                                </MessageBox> : <MessageBox variant="message-box failed">
                                                    Not Delivered !
                                                </MessageBox>}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card_body product-card-color  ">
                                                <h2>Payment</h2>
                                                <p>
                                                    <strong>Method: </strong>
                                                    {order.paymentMethod}
                                                </p>
                                                {order.deliveryDetails.isPaid ? <MessageBox variant="message-box-success success">
                                                    Payment successful !
                                                </MessageBox> : <MessageBox variant="message-box failed">
                                                    Not Paid !
                                                </MessageBox>}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card_body product-card-color  ">
                                                <h2>Order items:</h2>
                                                <ul>
                                                    {order.orderItems.map((pdt) => (
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
                                    {order.shippingCharges !== 0 && order.orderItems.length !== 0 && (
                                        <span
                                            className="m-y-small"
                                            style={{ color: "red", fontSize: "1.1rem" }}
                                        >
                                            Shop for ${(200 - order.itemTotal).toFixed(2)} more to avoid
                                            shipping charges !{" "}
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
                                                            {order.orderItems.reduce(
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
                                                        <p>+ ${order.shippingCharges}</p>
                                                    </div>
                                                    <div className="row m-y-xsmall">
                                                        <h3>
                                                            Tax{" "}
                                                            <span style={{ fontSize: "0.9rem", color: "brown" }}>
                                                                (12% on item total)
                                                            </span>
                                                        </h3>
                                                        <p>+ ${order.tax}</p>
                                                    </div>
                                                    <hr />
                                                    <div className="row m-y-small">
                                                        <h2>Order Total</h2>
                                                        <h2>${order.orderTotal}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            );
}
