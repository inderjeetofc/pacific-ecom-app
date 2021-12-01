import React from 'react'
import { useLocation, useParams } from 'react-router'

export default function CartScreen(props) {
    const productId = useParams().id;
    let Qty = useLocation().search;
    Qty = Number(Qty.split('=')[1])
    return (
        <div>
            <h1>CART SCREEN</h1>
            <div className="row">
            <p>Product Id : {productId}</p>
            <p>qty : {Qty}</p>
            </div>
        </div>
    )
}
