const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Julia"},
        {id: 2, name: "Pasha"},
        {id: 3, name: "Mama"},
        {id: 4, name: "Sergey"},
        {id: 5, name: "Ilya"},
        {id: 6, name: "Dima"},
    ],
    messages: [
        {id:1, message: "My first message"},
    ],
    text : "Hello!!!!!",
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: state.text}],
                text: "",
            }

        case UPDATE_NEW_MESSAGE_TEXT :
            return {
                ...state,
                text: action.text
            }

        default: return state;
    }
}

export default messengerReducer;

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text : text,
    }
)