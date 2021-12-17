import React from 'react'
import { useSelector } from 'react-redux';

export default function OrderScreen() {
    const orderCreate = useSelector(state => state.orderCreate)
    const {orderDetails} = orderCreate;
    console.log(orderDetails)
    return (
        <div>
            I M ORDER SCREEN ! YOUR ORDER IS PLACED ! :)
        </div>
    )
}
