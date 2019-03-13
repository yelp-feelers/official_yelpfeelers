import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import RestaurantList from "./Components/RestaurantList";
import RestaurantReviews from "./Components/RestaurantReviews";

// to control display of login links, mapStatetoProps and use a "loggedIn" key

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">YELP FEELERS</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              {/* <Collapse isOpen={this.state.isOpen} navbar> */}
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink>
                      <Link to="/">Log In</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink><Link to="/signup">Sign Up</Link></NavLink>
                  </NavItem>
                </Nav>
              {/* </Collapse> */}
            </Navbar>
          </div>
          <div className="navbar">
            <br />
          </div>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/restaurants" component={RestaurantList} />
          <PrivateRoute path="/restaurants/:id" component={RestaurantReviews} />
        </div>
      </Router>
    );
  }
}

export default App;
