import React from 'react'
import Rating from './Rating'

export default function Product(props) {
    const {product} = props
    return (
        <div key={product.id} className="row center card">
            <a href={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="card_body">
              <a href={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </a>
              <Rating rating={product.rating} reviews={product.reviews} ></Rating>
              <div className="price">
                <span>${product.price}</span>
              </div>
            </div>
          </div>
    )
}
