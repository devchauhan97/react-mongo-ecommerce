import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import LoginScreen from "./screens/LoginScreen";
import CheckOutScreen from "./screens/CheckOutScreen";
import PrivateRoute from "./PrivateRoute";

import Filter from "./components/Filter";

class App extends React.Component {

  
  render() {
    
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
           
            <Route path="/login" component={LoginScreen} />
            {/* <Route path="/admin" component={AdminScreen} /> */}
            <Route path="/" component={HomeScreen} exact />
            <PrivateRoute path="/checkout" component={CheckOutScreen} exact />
            
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
