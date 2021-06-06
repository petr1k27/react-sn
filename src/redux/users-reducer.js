import {userAPI} from "../api/auth";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_USERS_PAGE = 'CURRENT_USERS_PAGE'
const SET_TOTAL_COUNT = 'TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [
        // {id: 1, followed: true, name: 'Julia', status: 'I love my dogs', location: 'Belarus, Baranovichi'},
        // {id: 1, followed: false, name: 'Ilya', status: 'I love my vedro-laguna', location: 'Belarus, Darevo-Chij'},
        // {id: 1, followed: true, name: 'Pasha', status: 'I love my E39', location: 'Belarus, Baranovichi'},
    ],
    currentUsersPage: 1,
    countUsersOnPage: 5,
    totalCount: 0,
    isFetching: false,
    followingIsProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userId) {
                        return {...u, followed: true,}
                    }
                    return u;
                }),
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userId) {
                        return {...u, followed: false,}
                    }
                    return u;
                }),
            }

        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }

        case SET_CURRENT_USERS_PAGE: {
            return {
                ...state,
                currentUsersPage: action.currentPage,
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount,
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]
                    : state.followingIsProgress.filter(userId => userId !== action.userId)
            }
        }
        default:
            return state;
    }
}

export default usersReducer;

export const acceptFollow = (userId) => ({type: FOLLOW, userId});
export const acceptUnfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentUsersPage = (currentPage) => ({type: SET_CURRENT_USERS_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFollowingIsProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (currentUsersPage, countUsersOnPage) =>
    (dispatch) => {
        dispatch(setIsFetching(true));
        userAPI.getUsers(currentUsersPage, countUsersOnPage)
            .then(data => {
                    dispatch(setIsFetching(false));
                    dispatch(setUsers(data.items));
                    dispatch(setCurrentUsersPage(currentUsersPage));
                    dispatch(setTotalCount(data.totalCount));
                }
            );
    }

export const follow = (userId) =>
    (dispatch) => {
        dispatch(setFollowingIsProgress(true, userId));
        userAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(acceptFollow(userId))
            }
            dispatch(setFollowingIsProgress(false, userId))
        })
    }

export const unfollow = (userId) =>
    (dispatch) => {
        dispatch(setFollowingIsProgress(true, userId));
        userAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(acceptUnfollow(userId))
            }
            dispatch(setFollowingIsProgress(false, userId))
        })
    }


