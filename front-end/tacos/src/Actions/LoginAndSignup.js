import axios from "axios";
import { history } from "../Helpers/history";

// initial actions will be login start and login success

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

//action creators - login for login component, getTacos for CDM within protected home route

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  const endpoint = "https://yelpfeelers-server.herokuapp.com/api/auth/login";

  axios
    .post(endpoint, creds)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      history.push("/protected");
    })
    .catch(err => console.log(err));
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });

  const endpoint = "https://yelpfeelers-server.herokuapp.com/api/auth/signup";

  axios
    .post(endpoint, creds)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS });
      history.push("/protected");
    })
    .catch(err => console.log(err));
};
