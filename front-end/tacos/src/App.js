import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    this.props.logOut()
    // .then(()=> this.props.history.push('/login'))
  }

  render() {
    console.log(this.props.loggedIn);

    let loggedInNavBar = (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">YELP FEELERS</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/" onClick={() => this.logOut()}>
              LOG OUT
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );

    let loggedOutNavBar = (
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
    

    return (
      <Router>
        <div className="App">
          {this.props.loggedIn ? <div>{loggedInNavBar}</div> : <div>{loggedOutNavBar}</div>}
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
