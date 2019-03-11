import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";
import Login from "../src/Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import RestaurantList from "./Components/RestaurantList";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
          <Link to="/">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          </div>
          <Route path="/" component={Login} />
{/* Login below as a placeholder for the main screen component */}
          <PrivateRoute path="/protected" component={RestaurantList}/>
        </div>
      </Router>
    );
  }
}

export default App;
