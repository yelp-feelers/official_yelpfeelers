import { LOGIN_START, LOGIN_SUCCESS } from '../Actions/index'

const initialState = {
    yelpData: [],
    loggingIn: false,
    error: null
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
            yelpData: action.payload
        }
        default:
        return state;
    }   

}

export default reducer