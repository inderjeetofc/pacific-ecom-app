import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { addToCart } from "../state/actions/cartActions";
import { Link } from "react-router-dom";

export default function CartScreen(props) {
  const dispatch = useDispatch();
  let productId = useParams().id;
  //   console.log(productId,typeof(productId))
  //   productId= Number(productId)
  //   console.log(productId,typeof(productId))
  let Qty = useLocation().search;
  Qty = Number(Qty.split("=")[1]);
  const cart = useSelector((state) => state.cart);
  const cartItem = cart.cartItem;
  console.log(cartItem);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, Qty));
    }
  }, [dispatch, productId, Qty]);

  const removeFromCartHandler = () => {
    //delete cart pdt
  };

  return (
    <div>
      <div className="row screen-width card_body">
        <div className="col-2">
          <h1>Shopping Cart</h1>
          {cartItem.length === 0 ? (
            <div>
              cart is empty<Link to="/">Go Shopping</Link>
            </div>
          ) : (
            <ul>
              {cartItem.map((pdt) => (
                <li keys={pdt.cartData.item}>
                  <div className="row">
                    <div>
                      <img
                        src={pdt.cartData.image}
                        alt={pdt.cartData.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link
                        className="color-black"
                        to={`/product/${productId}`}
                      >
                        {pdt.cartData.name}
                      </Link>
                    </div>
                    <div>
                      <select
                        value={cartItem.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(pdt.cartData.id, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(pdt.cartData.inStock).keys()].map((e) => (
                          <option key={e + 1} value={e + 1}>
                            {e + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>${pdt.cartData.price}</div>
                    <div>
                      <button
                        type="button"
                        onClick={removeFromCartHandler(pdt.cartData.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
