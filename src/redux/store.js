import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";

let store = {

    _state : {
        profilePage: {
            posts: [
                {id: 1, postMessage: "", likeCounter: 0},
                {id: 2, postMessage: "", likeCounter: 27},
            ],
            newText: "it-dra-ty-ti",
        },

        friends: [
            {id: 1, name: "Julia"},
            {id: 2, name: "Pasha"},
            {id: 3, name: "Mama"},
            {id: 4, name: "Sergey"},
            {id: 5, name: "Ilya"},
            {id: 6, name: "Dima"},
        ],

        messengerPage: {
            dialogs: [
                {id: 1, name: "Julia"},
                {id: 2, name: "Pasha"},
                {id: 3, name: "Mama"},
                {id: 4, name: "Sergey"},
                {id: 5, name: "Ilya"},
                {id: 6, name: "Dima"},
            ],
            messages: [
                {id:1, message: "SEXXXXXX"},
            ],
            newText : "Hello!",
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    console.log(this._state.profilePage.newText)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messengerPage = messengerReducer(this._state.messengerPage, action)

        this._callSubscriber(this._state);
    }
}

export default store;