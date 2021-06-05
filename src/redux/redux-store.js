import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

let reducersBatch = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    userPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;