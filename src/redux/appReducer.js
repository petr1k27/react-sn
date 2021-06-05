import {authMe} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false,

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED :
            return {
                ...state,
                initialized: true,
            }
        default: return state;
    }
}

export default appReducer;

export const initialize = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    Promise.all([promise]).then(() => {dispatch(initialize())})
}
