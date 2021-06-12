import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "d5e3e26d-4d40-440e-9746-b27a58c8ae87"
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
    },

    uploadUserPhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers:  {
                'Content-Type' : 'multipart/form-data'
            }
        });
    }
}

export const authAPI = {

    authMe() {
        return instance.get(`auth/me`)
    },

    signIn(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    signOut() {
        return instance.delete(`auth/login`)
    },


}
