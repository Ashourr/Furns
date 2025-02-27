import React, { useEffect } from "react";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteFromToCart ,increaseQuantity ,clearCart} from "../../rit/slices/Cart-slice";
// import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons/faDeleteLeft'
function Cart() {
  let cart = useSelector((state) => state.cart.items);
  let dispatch = useDispatch();

  let totalPricce = cart.reduce((acc, cart) => {
    acc += cart.attributes.price * cart.qty;
    return acc;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    
  }, [cart]);

  let showCart = cart.map((cart) => {
    return (
      <tr key={cart.id}>
        <td>
          <img
            src={`http://localhost:1337${cart.attributes.img.data.attributes.url}`}
            alt="..."
          />
        </td>
        <td>{cart.attributes.title}</td>
        <td>{cart.attributes.price}</td>
        <td>
          <div className="div">
            <button onClick={() => {dispatch(increaseQuantity(cart))}}>+</button>
            <span>{cart.qty}</span>
            <button onClick={() => {dispatch(decreaseQuantity(cart))}}>-</button>
          </div>
        </td>
        <td>
          <div
            className="icond"
            onClick={() => dispatch(deleteFromToCart(cart))}
          >
            <FontAwesomeIcon icon={faDeleteLeft} className="icon" />
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div className="cart">
      <div className="container">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Img</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th className="qty">Qty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{showCart}</tbody>
            </table>
            <div className="total">
              <h5>Total:</h5>
              <p>{totalPricce.toFixed(2)}</p>
            </div>

            <div className="form">
              <div>
                <input type="text" placeholder="Enter Your Coupon Code" />
                <button>Apply Coupon</button>
              </div>
              <div className="link">
                <Link onClick={()=>dispatch(clearCart())} className="link1">Clear Cart</Link>
                <Link className="link2">Proceed To Checkout</Link>
              </div>
            </div>
          </>
        ) : (
          <div className="noPro">
            <div className="icon">
              <FontAwesomeIcon icon={faShoppingCart} className="i" />
            </div>
            <p>
              There Are No Prodcuts In <br /> Your Favorites
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
