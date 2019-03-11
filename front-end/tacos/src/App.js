import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";
import Login from "../src/Components/Login";
import PrivateRoute from "./Components/PrivateRoute";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Login} />
{/* Login below as a placeholder for the main screen component */}
          <PrivateRoute path="/protected" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
