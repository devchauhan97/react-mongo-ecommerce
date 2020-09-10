import React from "react";
import store from "./store"; 
import { BrowserRouter, Route, Link } from "react-router-dom";
import Filter from "./components/Filter";

class Header extends React.Component {
    logOut = () => { 
        // if( this.props.user && this.props.cartItems.length)
        //localStorage.clear("cartItems");
        localStorage.setItem("cartItems", []);
        localStorage.setItem("user", null);
        window.location.href='/';
    };
    render() {
    
    return (
       
            <header>
              <Link to="/"><img src="/images/logo.png"/></Link>
              <Filter></Filter> 
              <a onClick={this.logOut.bind()} >Logout</a>
            </header>
             
    );
  }
}

export default Header;
