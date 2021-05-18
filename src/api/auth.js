import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "1e4fbe4a-89c8-4f02-ba38-01d252607efc"
    }
})

export const userAPI = {

    getUsers(currentUsersPage = 1, countUsersOnPage = 5)  {
        return instance.get(`users?page=${currentUsersPage}&count=${countUsersOnPage}`)
            .then(response => {
                return response.data;
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI ={

    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateUserStatus(newStatus) {
        return instance.put(`profile/status`, {status : newStatus})
    }
}

export const authAPI = {

    signIn() {
        return instance.get(`auth/me`)
    },

}
