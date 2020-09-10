import React, { Component } from "react";
import formatCurrency from "../util";
import { connect } from "react-redux";
import { doLogin } from "../actions/userActions";

var styles = {
  color: "red",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  login = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.doLogin(user);
  };
  checkAuth = () => {
    if (this.props.user){
      //console.login('login',this.props)
      window.location.href = "/";
    }
      
  };
  render() {
    const { cartItems, user, error } = this.props;
    this.checkAuth();
    console.log(this.props.user);
    return (
      <div>
        <div>
          <form onSubmit={this.login}>
            <ul className="form-container">
              <li>
                <label>User name</label>
                <input
                  name="username"
                  type="text"
                  required
                  onChange={this.handleInput}
                ></input>
              </li>
              <li>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  onChange={this.handleInput}
                ></input>
              </li>
              <li><h3 style={styles}>{ error ?  error.msg : null} </h3></li>
              <li>
                <button className="button primary" type="submit">
                  Login
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user.user,
    error: state.error.error,
    cartItems: state.cart.cartItems,
  }),
  { doLogin }
)(Login);
