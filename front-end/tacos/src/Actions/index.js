import axios from 'axios'


// initial actions will be login start and login success

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

//action creators - login for login component, getTacos for CDM within protected home route

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    //axios request
    const endpoint = "http://localhost:5000/api/auth/login";

    axios.post(endpoint, creds)
    .then(res => {
        // check format of res to confirm payload location
        localStorage.setItem("jwt", res.data.payload);
        dispatch({ type: LOGIN_SUCCESS});
    })
}

export const getTacos = () => dispatch => {
    
}