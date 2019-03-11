import { LOGIN_START, LOGIN_SUCESS } from '../Actions/index'

const initialState = {
    yelpData: [],
    loggingIn: false,
    //placeholder till we figure out what sort of App we're building
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            // placeholder
        };
        case LOGIN_SUCCESS:
        return {
            //placeholder
        }
    }

}