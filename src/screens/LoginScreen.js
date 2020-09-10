import React, { Component } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Login from "../components/Login";

export default class LoginScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}
