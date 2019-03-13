import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../Actions/LoginAndSignup";
import {
  FETCHING_RESTAURANTS,
  RESTAURANT_SUCCESS,
  FETCHING_REVIEWS,
  REVIEW_SUCCESS
} from "../Actions/DataFetching";

const initialState = {
  yelpData: [],
  reviews: [],
  //interstitial states to conditionally render spinners and stuff
  loggedIn: false,
  loggingIn: false,
  signingUp: false,
  fetchingTacos: true,
  error: null,
  token: localStorage.getItem("jwt")
  //placeholder till we figure out what sort of App we're building
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loggingIn: false,
        loggedIn: true,
        token: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        error: null,
        signingUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        signingUp: false
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    case FETCHING_RESTAURANTS:
      return {
        ...state,
        fetchingTacos: true
      };
    case RESTAURANT_SUCCESS:
      return {
        ...state,
        fetchingTacos: false,
        yelpData: action.payload,
        reviews: []
      };
    case FETCHING_REVIEWS:
      return {
        ...state,
        fetchingReviews: true
      };
    case REVIEW_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        fetchingReviews: false
      };
    default:
      return state;
  }
};

export default reducer;
