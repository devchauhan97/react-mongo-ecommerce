import React, { Component } from "react";
import Filter from "../components/Filter"; 
import CardDetails from "../components/CardDetails";
import CheckOutItems from "../components/CheckOutItems";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
          <CheckOutItems />
          </div>
          <div className="sidebar">
            <CardDetails />
          </div>
        </div>
      </div>
    );
  }
}
