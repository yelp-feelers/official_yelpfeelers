import React, { Component } from "react";
import { connect } from 'react-redux';
import { login } from "../Actions/index";

class Login extends Component {
  state = {
    loggingIn: false,
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(
      this.state.credentials(() => {
        this.props.history.push("/protected");
      })
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <br />
          <input
            name="password"
            type="text"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <br />
          <button />
        </form>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { login }
)(Login);
