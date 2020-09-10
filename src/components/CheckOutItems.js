import React, { Component } from "react";
import {formatCurrency} from "../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class CheckOutItems extends Component {
  constructor(props) {
    super(props);
     
  }
  render() {
    const { cartItems } = this.props;
    return (
      <div>
         
          <div className="cart cart-header">
            Your Shopping Cart
          </div>
         
        <div>
            <div className="cart">
                <ul className="cart-items">
                  {cartItems.map((item) => (
                    <li className="checkout-items" key={item._id}>
                      <div>
                        <img src={item.image} alt={item.title}></img>
                      </div>
                      <div>
                        <div>{item.title}</div>
                        <div className="right">
                          {formatCurrency(item.price)} x {item.count}{" "}
                          <button
                            className="button"
                            onClick={() => this.props.removeFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
            </div>
            {cartItems.length !== 0 && (
              <div>
                <div className="cart">
                  <div className="total">
                    <div>
                      Total:{" "}
                      {formatCurrency(
                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({ 
    cartItems: state.cart.cartItems,
  }),
)(CheckOutItems);
