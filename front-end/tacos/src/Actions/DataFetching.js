import axios from 'axios';



export const FETCHING_TACOS_ALL = "FETCHING_TACOS_ALL"
export const TACO_SUCCESS_ALL = "TACO_SUCCESS_ALL"

export const getTacos = () => dispatch => {
    // get request from server for tacos data
    dispatch({ type:FETCHING_TACOS_ALL })
    axios
    .get("http://localhost:5000/restaurantlist")
    .then(res => dispatch({ type: TACO_SUCCESS_ALL}))
}