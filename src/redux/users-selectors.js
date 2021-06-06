export const getUsers = (state) => {
    return state.userPage.users;
}

export const getCurrentUsersPage = (state) => {
    return state.userPage.currentUsersPage;
}

export const getCountUsersOnPage = (state) => {
    return state.userPage.countUsersOnPage;
}

export const getTotalCount = (state) => {
    return state.userPage.totalCount;
}

export const getIsFetching = (state) => {
    return state.userPage.isFetching;
}

export const getFollowingIsProgress = (state) => {
    return state.userPage.followingIsProgress;
}
