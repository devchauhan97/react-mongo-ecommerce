import React, { Component } from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Header from "../Header";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="main">
            <Products></Products>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
