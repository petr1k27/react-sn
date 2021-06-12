import {profileAPI} from "../api/auth";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_PHOTOS = 'SET_USER_PHOTOS';

let initialState = {
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null
        },
        fullName: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {
            small: null,
            large: null,
        },
        userId: 17367,
    },

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

        case SET_USER_PHOTOS : {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
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
export const setUserPhoto = (photos) => ({type: SET_USER_PHOTOS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const uploadUserPhoto = (userPhoto) => async (dispatch) => {
    let response = await profileAPI.uploadUserPhoto(userPhoto)
    if (response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos));
    }
}

