import React, { Component } from "react";
import {isAuthenticated} from "./util";
import { BrowserRouter, Route, Link,Redirect } from "react-router-dom";

const  PrivateRoute = (props) => {

const condition = isAuthenticated();

return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
  (<Redirect  to="/login"  />);
};
export  default  PrivateRoute;
