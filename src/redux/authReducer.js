import {authAPI} from "../api/auth";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthUser: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export default authReducer;

export const setUserData = (id, email, login, isAuthUser) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuthUser}
});

export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const signIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.signIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authMe());
    }
}

export const signOut = () => async (dispatch) => {
    let response = await authAPI.signOut();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}