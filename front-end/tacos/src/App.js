import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { logOut } from "./Actions/LoginAndSignup";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import RestaurantList from "./Components/RestaurantList";
import RestaurantReviews from "./Components/RestaurantReviews";

// to control display of login links, mapStatetoProps and use a "loggedIn" key

class App extends Component {
  logOut() {
    localStorage.removeItem("jwt");
  }

  render() {
    let navBar;

    if (this.props.LoggedIn) {
      navBar = (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">YELP FEELERS</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" onClick={this.logOut()}>
                Log Out
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
    } else {
      navBar = (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">YELP FEELERS</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/login">LOG IN</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">SIGN UP</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
    }

    return (
      <Router>
        <div className="App">
          <div>{navBar}</div>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/restaurants" component={RestaurantList} />
          <PrivateRoute path="/restaurants/:id" component={RestaurantReviews} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(
  mapStateToProps,
  { logOut }
)(App);
