import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default function Product(props) {
    const {product} = props
    return (
        <div key={product.id} className="row center card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="card_body">
              <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <Rating rating={product.rating} reviews={product.reviews} ></Rating>
              <div className="price">
                <span>${product.price}</span>
              </div>
            </div>
          </div>
    )
}
