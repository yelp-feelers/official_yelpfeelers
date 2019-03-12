import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import RestaurantList from "./Components/RestaurantList";
import RestaurantReviews from "./Components/RestaurantReviews";



// to control display of login links, mapStatetoProps and use a "loggedIn" key

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <Link to="/">Log In</Link>
            <br />
            <Link to="/signup">Sign Up</Link>
          </div>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/restaurants" component={RestaurantList} />
          {/* <PrivateRoute path="/restaurants/:id" component={RestaurantReviews} /> */}
        </div>
      </Router>
    );
  }
}



export default App;
