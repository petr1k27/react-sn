import {profileAPI} from "../api/auth";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState =  {
    profile: null,
    posts: [
        {id: 1, post: "Hello there!!", likeCounter: 0},
        {id: 2, post: "General Kenobi?", likeCounter: 27},
    ],
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                posts: [...state.posts, {id: 3, post: action.newPost, likeCounter: 0}]
            }
        }

        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_USER_STATUS : {
            return {
                ...state,
                status: action.status
            }

        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPost = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile =  (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        }
    );
}

export const getUserStatus =  (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        }
    );
}

export const updateUserStatus =  (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        }
    );
}

