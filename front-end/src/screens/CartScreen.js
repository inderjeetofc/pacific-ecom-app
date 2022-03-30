import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { addToCart, removeFromCart } from "../state/actions/cartActions";
import { Link } from "react-router-dom";
import MessageBox from "../components/MessageBox";

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

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const checkoutHandler = () => {
    // props.history.push('/signin?redirect=shipping')
  };

  return (
    <div>
      <div className="row screen-width card_body top">
        <div className="col-2">
          <h1>Shopping Cart</h1>
          {cartItem.length === 0 ? (
            <MessageBox variant={`message-box`}>
              Cart is Empty !{" "}<Link to="/" >Go Shopping</Link>
            </MessageBox>
          ) : (
            <ul>
              {cartItem.map((pdt) => (
                <li keys={pdt.cartData._id}>
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
                            addToCart(pdt.cartData._id, Number(e.target.value))  //update quatity from cart screen
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
                        onClick={() => removeFromCartHandler(pdt.cartData._id)} //call remove func in onclick to remove only that specific item
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
        <div className="col-1 row center">
          <div className="card card_body product-card-color">
            <ul>
              <li>
                <h2>
                  Subtotal :({cartItem.reduce((a, c) => a + c.qty, 0)}) items :
                  ${" "}
                  {Math.round(
                    cartItem.reduce((a, c) => a + c.cartData.price * c.qty, 0) *
                      100
                  ) / 100}
                </h2>
              </li>
              <li>
                <Link to={"/signin?redirect=shipping"}>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="primary block"
                    disabled={cartItem.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
