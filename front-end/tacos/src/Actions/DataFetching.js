import axios from "axios";

export const FETCHING_TACOS_ALL = "FETCHING_TACOS_ALL";
export const TACO_SUCCESS_ALL = "TACO_SUCCESS_ALL";
export const FETCHING_REVIEWS = "FETCHING_REVIEWS";
export const REVIEW_SUCCESS = "REVIEW_SUCCESS";

export const getTacos = () => dispatch => {
  // get request from server for tacos data
  dispatch({ type: FETCHING_TACOS_ALL });

  const endpoint = "http://jsonplaceholder.typicode.com/posts";

  return axios
    .get(endpoint)
    .then(res => dispatch({ type: TACO_SUCCESS_ALL, payload: res.data }))
    .catch(err => console.log(err));
};

export const getReviews = () => dispatch => {
  // get request from server for tacos data
  dispatch({ type: FETCHING_REVIEWS });

  const endpoint = "http://jsonplaceholder.typicode.com/todos";

  return axios
    .get(endpoint)
    .then(res => dispatch({ type: REVIEW_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};
