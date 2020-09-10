import React, { Component } from "react";
import {formatCurrency} from "../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardnumber: "",
      ex_date: "", 
      cvv :"",
      showCheckout: false,
    }; 
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      cardnumber: this.state.cardnumber,
      ex_date: this.state.ex_date, 
      cvv: this.state.cvv, 
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  };
  closeModal = () => {
    this.props.clearOrder();
    window.location.href="/"
  };
  render() {
    const { cartItems, order } = this.props;
    
    return (
      <div>
          <div className="cart cart-header">
           Card Details
          </div>
         <div>
          {cartItems.length !== 0 && (
            <div>
              <div className="checkout-left">
                    <form onSubmit={this.createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Card Number</label>
                          <input
                            name="cardnumber"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Expiry Date</label>
                          <input
                            name="ex_date"
                            type="date"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Cvv</label>
                          <input
                            name="cvv"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
            </div>
          )}
        </div>
        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Cardnumber:</div>
                    <div>{order.cardnumber}</div>
                  </li>
                  <li>
                    <div>Expire Date:</div>
                    <div>{order.ex_date}</div>
                  </li>
                  <li>
                    <div>cvv:</div>
                    <div>{order.cvv}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{ (order.total)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user.user,
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, createOrder, clearOrder }
)(CardDetails);
