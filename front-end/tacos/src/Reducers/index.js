import { LOGIN_START, LOGIN_SUCCESS, SIGNUP_START, SIGNUP_SUCCESS } from '../Actions/LoginAndSignup'

const initialState = {
    yelpData: [],
    loggingIn: false,
    signingUp: false,
    error: null,
    token: localStorage.getItem('jwt')
    //placeholder till we figure out what sort of App we're building
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            loggingIn: true
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            token: action.payload
        }
        case SIGNUP_START:
        return {
            ...state,
            signingUp: true
        }
        case SIGNUP_SUCCESS:
        return {
            ...state,
            signingUp: false,
        }


        default:
        return state;
    }   

}

export default reducer