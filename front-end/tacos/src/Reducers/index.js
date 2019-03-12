import { LOGIN_START, LOGIN_SUCCESS, SIGNUP_START, SIGNUP_SUCCESS } from '../Actions/LoginAndSignup'
import { FETCHING_TACOS_ALL, TACO_SUCCESS_ALL } from '../Actions/DataFetching';

const initialState = {
    yelpData: [],
    //interstitial states to conditionally render spinners and stuff
    loggedIn: false,
    loggingIn: false,
    signingUp: false,
    fetchingTacos: true,
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
            loggedIn: true,
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
        case FETCHING_TACOS_ALL:
        return {
            ...state,
            fetchingTacos: true
        }
        case TACO_SUCCESS_ALL:
        return {
            ...state,
            fetchingTacos: false,
            yelpData: action.payload
        }

        default:
        return state;
    }   

}

export default reducer