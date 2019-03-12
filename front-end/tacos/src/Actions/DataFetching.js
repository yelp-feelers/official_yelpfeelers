import axios from 'axios';



export const FETCHING_TACOS_ALL = "FETCHING_TACOS_ALL"
export const TACO_SUCCESS_ALL = "TACO_SUCCESS_ALL"

export const getTacos = () => dispatch => {
    // get request from server for tacos data
    dispatch({ type:FETCHING_TACOS_ALL })

    const endpoint = ""

    return axios
    .get(endpoint)
    .then(res => dispatch({ type: TACO_SUCCESS_ALL, payload: res.data}))
    .catch(err=> console.log(err))
}