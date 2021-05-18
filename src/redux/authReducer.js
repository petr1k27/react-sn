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
                ...action.userData,
                isAuthUser: true,
            }
        default: return state;
    }
}

export default authReducer;

export const setUserData = (userData) => ({type: SET_USER_DATA, userData : userData,});

export const signIn = () => (dispatch) => {
    authAPI.signIn().then(response => {
        if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setUserData({id, email, login}));
        }
    });
}
